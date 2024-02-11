import { AUTH_SERVER_URL } from "configs";
import { CredentialsT } from "types";
import { axiosWithHeaders } from "./helpers";

export type PostSignInResponseT = {
  accessToken: string;
};

const postSignIn = ({
  email,
  password,
}: CredentialsT): Promise<PostSignInResponseT> => {
  return axiosWithHeaders
    .post(`${AUTH_SERVER_URL}/auth`, JSON.stringify({ email, password }))
    .then((res) => res.data);
};

export default postSignIn;
