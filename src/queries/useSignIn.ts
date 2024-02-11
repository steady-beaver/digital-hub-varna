import { useMutation } from "@tanstack/react-query";
import postSignIn from "api/postSignIn";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { AuthT, CredentialsT } from "types";

const useSignIn = () => {
  return useMutation<AuthT, AxiosError<{ message: string }>, CredentialsT>({
    mutationFn: ({ email, password }) => postSignIn({ email, password }),
    onSuccess: (data) => {
      toast.success(data.accessToken);
      // navigate("/signin");
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

export default useSignIn;
