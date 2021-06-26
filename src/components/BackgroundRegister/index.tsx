import React from "react";
import { Container, Title } from "./style";

const BackgroundRegister = ({children}) => {
  return(
    <Container>
      <Title>Venha fazer parte da comunidade e deixe um elogio para o seu colega!</Title>
      {children}
    </Container>
  );
}

export default BackgroundRegister;