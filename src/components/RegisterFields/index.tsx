import React from "react";
import { Field, FieldContainer, Label } from "../LoginRegister/style";

const RegisterFields = () => {
  return (
    <>
      <FieldContainer>
        <Label>E-mail:</Label>
        <Field id="email" type="text"/>
      </FieldContainer>
      <FieldContainer>
        <Label>Nome:</Label>
        <Field id="name" type="text"/>
      </FieldContainer>
      <FieldContainer>
        <Label>Senha:</Label>
        <Field id="password" type="password"/>
      </FieldContainer>
      <FieldContainer>
        <Label>Confirme:</Label>
        <Field id="repeatPassword" type="password"/>
      </FieldContainer>
    </>
  )
}

export default RegisterFields;