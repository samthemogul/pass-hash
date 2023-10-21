
import { Navigate, Outlet, useLocation } from "react-router-dom"
import useAuth from "../constants/customHooks/useAuth";


const ProtectedRoutes = () => {
    const location = useLocation();
    const logged = useAuth();
  return logged ? <Outlet /> : <Navigate to="/" replace state={{from: location}} />
}

export default ProtectedRoutes