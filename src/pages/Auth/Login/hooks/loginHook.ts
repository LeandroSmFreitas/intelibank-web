import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AuthUtils from '../../../../utils/auth-utils';
import { useAuth } from '../../../../context/auth';
import { useEffect } from 'react';

interface LoginFormInputs {
    email: string;
    password: string;
}

export const UseLogin = () => {
    const navigate = useNavigate()
    const { setIsAuthenticated, isAuthenticated, logar } = useAuth()

    useEffect(() => {
        if (isAuthenticated) {
          navigate("/dashboard");
        }
      }, [isAuthenticated]);

    const loginSchema = Yup.object().shape({
        email: Yup.string().email('Digite um email válido').required('Email é obrigatório'),
        password: Yup.string().required('Senha é obrigatória'),
    });

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
        resolver: yupResolver(loginSchema)
    });

    const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
        const res = await logar(data.email, data.password)
        if(res.token){
            AuthUtils.setToken(res.token)
            setIsAuthenticated(true);
            navigate("/dashboard")
        }
    };

    return {
        onSubmit,
        register,
        handleSubmit,
        errors
    }
}