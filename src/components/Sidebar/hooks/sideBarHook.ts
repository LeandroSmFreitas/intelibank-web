import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


export const useSideBar = () => {
    const [menuSelected, setMenuSelected] = useState<string>('dashboard');
    const location = useLocation();
    const navigate = useNavigate();
    
    useEffect(() => {
        const path = location.pathname.split('/')[1];
        setMenuSelected(path);
    } , [location]);

    const handleChangeMenu = () => {
        if(menuSelected === 'dashboard'){
            navigate('/transaction');
            setMenuSelected('transaction');
        }else{
            navigate('/dashboard');
            setMenuSelected('dashboard');
        }
    }


    return { menuSelected, handleChangeMenu }


}