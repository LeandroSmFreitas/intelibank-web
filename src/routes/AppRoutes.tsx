import { Route, Routes } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Resgister";
import PrivateRoutes from "./privateRoutes";
import Dashboard from "../pages/dashboard";
import Transaction from "../pages/transaction";


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route element={<PrivateRoutes />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/transaction" element={<Transaction />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;