import { AUTH_SERVER_URL } from "configs";
import { AuthT, CredentialsT } from "types";
import { axiosWithHeaders } from "./helpers";

const postSignIn = ({ email, password }: CredentialsT): Promise<AuthT> => {
  return axiosWithHeaders
    .post(`${AUTH_SERVER_URL}/auth`, JSON.stringify({ email, password }))
    .then((res) => res.data);
};

export default postSignIn;
