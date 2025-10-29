import { useAuth } from "@/hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const { user } = useAuth();
  const location = useLocation();

  // console.log(user?.email, token); // Use optional chaining

  if (token && user && user.email) {
    return children;
  }

  return <Navigate to="/auth/sign-in" state={{ from: location }} replace />;
};

export default PrivateRoute;
