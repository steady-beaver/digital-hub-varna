import { AUTH_SERVER_URL } from "configs";
import { useAuth } from "contexts";
import { AuthT } from "types";
import { axiosPrivate } from "./axiosInstances";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const getNewAccessToken = async () => {
    const response = await axiosPrivate.get<AuthT>(
      `${AUTH_SERVER_URL}/refresh`
    );
    setAuth((prev) => {
      // we are refreshing access token only if there is a user logged in so this would never happen
      if (prev === null) {
        return prev;
      }
      console.log(JSON.stringify(prev));
      console.log(response.data.accessToken);
      return { ...prev, accessToken: response.data.accessToken };
    });
    return response.data.accessToken;
  };
  return getNewAccessToken;
};

export default useRefreshToken;
