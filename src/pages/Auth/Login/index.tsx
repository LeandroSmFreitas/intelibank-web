import { useNavigate } from "react-router-dom"
import Button from "../../../components/Button"
import Footer from "../../../components/Footer"
import Header from "../../../components/Header"
import Input from "../../../components/Input"
import * as S from "./styles"
import { UseLogin } from "./hooks/loginHook"


const Login = () => {
  const navigate = useNavigate();
  const { onSubmit, errors, handleSubmit, register} = UseLogin()

  return (
    <S.Container>
      <Header />
      <S.ContainerForm onSubmit={handleSubmit(onSubmit)}>
        <S.CompanyName>Intelibank</S.CompanyName>
        <S.TitleForm>Entrar</S.TitleForm>
        <S.DescriptionForm>Informe seu e-mail e senha para acessar sua conta</S.DescriptionForm>
        <Input placeholder="Insira seu e-mail" title="E-mail" {...register("email")} error={errors.email?.message}/>
        <Input placeholder="Insira sua senha" title="Senha" {...register("password")} error={errors.password?.message}/>
        <S.ForgotPassword href="/forgotPassword">Esqueceu sua senha?</S.ForgotPassword>
        <Button text="Entrar" type="submit"/>
        <Button text="Criar conta" click={() => navigate("/register")} type="button"/>
      </S.ContainerForm>
      <Footer />
    </S.Container>
  )
}

export default Login