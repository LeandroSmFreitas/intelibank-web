import { useNavigate } from "react-router-dom"
import Button from "../../../components/Button"
import Header from "../../../components/Header"
import Input from "../../../components/Input"
import * as S from "./styles"
import { UseRegister } from "./hooks/registerHook"


const Register = () => {
  const { onSubmit, errors, handleSubmit, register} = UseRegister()

  return (
    <S.Container>
      <Header />
      <S.ContainerForm onSubmit={handleSubmit(onSubmit)}>
        <S.CompanyName>Intelibank</S.CompanyName>
        <S.TitleForm>Criar conta</S.TitleForm>
        <S.DescriptionForm>Crie sua conta no banco que une inovação e suporte personalizado para facilitar sua vida financeira.</S.DescriptionForm>
        <Input placeholder="Insira seu nome" title="Nome" {...register("name")} error={errors.name?.message}/>
        <Input placeholder="Insira seu e-mail" title="E-mail" {...register("email")} error={errors.email?.message}/>
        <Input placeholder="Insira sua senha" title="Senha" {...register("password")} error={errors.password?.message}/>
        <Input placeholder="Insira sua senha novamente" title="Confirme sua senha" {...register("confirmPassword")} error={errors.confirmPassword?.message}/>
        <Input placeholder="Insira sua senha de transferência" title="Senha de transfêrencia" {...register("transferPassword")} error={errors.transferPassword?.message}/>
        <Button text="Criar conta" type="submit"/>
        <S.HaveAccount href="/">Ja tem uma conta?</S.HaveAccount>
      </S.ContainerForm>
    </S.Container>
  )
}

export default Register