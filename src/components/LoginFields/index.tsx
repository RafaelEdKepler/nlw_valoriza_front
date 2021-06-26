import React from "react";
import { Field, FieldContainer, Label } from "../LoginRegister/style";

const RegisterFields = () => {
  return (
    <>
      <FieldContainer>
        <Label>Login:</Label>
        <Field id="login" placeholder="E-mail" type="text"/>
      </FieldContainer>
      <FieldContainer>
        <Label>Senha:</Label>
        <Field id="password" type="password"/>
      </FieldContainer>
    </>
  )
}

export default RegisterFields;