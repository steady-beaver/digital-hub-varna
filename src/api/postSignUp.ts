import { AUTH_SERVER_URL } from "configs";
import { CredentialsT } from "types";
import { axiosWithHeaders } from "./helpers";

export type SuccessResponse = {
  success: string;
};

const postSignUp = ({
  email,
  password,
}: CredentialsT): Promise<SuccessResponse> => {
  return axiosWithHeaders
    .post(`${AUTH_SERVER_URL}/register`, JSON.stringify({ email, password }))
    .then((res) => res.data);
};

export default postSignUp;
