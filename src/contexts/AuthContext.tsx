import { createContext, useContext, useState } from "react";
import { AuthT } from "types";

type AuthContextT = {
  auth: AuthT | null;
  setAuth: React.Dispatch<React.SetStateAction<null | AuthT>>;
};

const AuthContext = createContext<AuthContextT>({
  auth: null,
  setAuth: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext) as AuthContextT;
};

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState<AuthT | null>(null);

  return (
    <AuthContext.Provider value={{ auth, setAuth } as AuthContextT}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
