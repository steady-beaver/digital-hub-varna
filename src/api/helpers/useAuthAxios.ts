import { useAuth } from "contexts";
import { useEffect } from "react";
import { axiosPrivate } from "./index";
import useRefreshToken from "./useRefreshToken";

// We use this hook for authorization purposes.
// If the access token is expired and returns 403,
// we will try to get another access token once
// unfortunately we don't use this hook in the project because we use public API

const useAuthAxios = () => {
  const getNewAccessToken = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await getNewAccessToken();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [auth, getNewAccessToken]);

  return axiosPrivate;
};

export default useAuthAxios;
