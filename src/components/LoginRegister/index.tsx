import React from "react";
import { Container, Btn, Field, FieldContainer, Label, LogoContainer, SmallText, Logo } from "./style";
import LoginFields from "../LoginFields/index";
import RegisterFields from "../RegisterFields/index";

const LoginRegister = ({type}) => {
  return (
    <Container>
      <LogoContainer>
        <Logo src="./logo.png"></Logo>
      </LogoContainer>
      {type === "login" ? (
        <LoginFields/>
      ) : (
        <RegisterFields/>
      )}
      <SmallText>Ainda não tem uma conta? <u>Se inscreva!</u></SmallText>
      <Btn>
        Entrar
      </Btn>
    </Container>
  )
}

export default LoginRegister;