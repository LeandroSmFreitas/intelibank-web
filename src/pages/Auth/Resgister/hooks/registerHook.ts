import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AuthUtils from '../../../../utils/auth-utils';
import { useAuth } from '../../../../context/auth';
import { useEffect } from 'react';

interface RegisterFormInputs {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    transferPassword: string;
}

export const UseRegister = () => {
    const navigate = useNavigate()
    const { setIsAuthenticated, isAuthenticated, createUser } = useAuth()

    useEffect(() => {
        if(isAuthenticated){
            navigate("/dashboard")
        }
    },[isAuthenticated])


    const registerSchema = Yup.object().shape({
        name: Yup.string().required('nome é obrigatório'),
        email: Yup.string().email('Digite um email válido').required('Email é obrigatório'),
        password: Yup.string().required('Senha é obrigatória'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password')], 'Senhas não coincidem')
          .required('Confirmar senha é obrigatório'),
        transferPassword: Yup.string().required('Senha de transferência é obrigatória')
    });

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormInputs>({
        resolver: yupResolver(registerSchema)
    });

    const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
        const res = await createUser(data.name, data.email, data.password, data.transferPassword)
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