import { useMutation } from "@tanstack/react-query";
import postSignIn, { PostSignInResponseT } from "api/postSignIn";
import { AxiosError } from "axios";
import { useAuth } from "contexts";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CredentialsT } from "types";

const useSignIn = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  return useMutation<
    PostSignInResponseT,
    AxiosError<{ message: string }>,
    CredentialsT
  >({
    mutationFn: ({ email, password }) => postSignIn({ email, password }),
    onSuccess: (data, credentials) => {
      setAuth({
        accessToken: data.accessToken,
        user: credentials.email,
      });
      toast.success(`Hello ${credentials.email}`);
      navigate("/search");
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

export default useSignIn;
