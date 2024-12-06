import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

const PrivateRoutes = () => {
    const { verifyToken } = useAuth();

    return verifyToken() ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;