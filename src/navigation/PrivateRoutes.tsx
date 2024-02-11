import { useAuth } from "contexts";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  let { auth } = useAuth();
  console.log("AUTH", auth);
  return auth?.accessToken ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoutes;
