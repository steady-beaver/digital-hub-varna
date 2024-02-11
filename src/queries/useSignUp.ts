import { useMutation } from "@tanstack/react-query";
import { postSignUp } from "api";
import { SuccessResponse } from "api/postSignUp";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CredentialsT } from "types";

const useSignUp = () => {
  const navigate = useNavigate();

  return useMutation<
    SuccessResponse,
    AxiosError<{ message: string }>,
    CredentialsT
  >({
    mutationFn: ({ email, password }) => postSignUp({ email, password }),
    onSuccess: (data) => {
      toast.success(data.success);
      navigate("/signin");
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

export default useSignUp;
