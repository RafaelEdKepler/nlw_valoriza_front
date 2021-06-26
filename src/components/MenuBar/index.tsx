import React from "react";

import { Container, BtnNewCompliment, Option, OptionsList } from "./style";

const MenuBar = () => {
  return(
    <Container>
      <BtnNewCompliment><b>+ Enviar um elogio</b></BtnNewCompliment>
      <OptionsList>
        <Option selected="true">Meus elogios recebidos</Option>
        <Option>Meus elogios enviados</Option>
        <Option>Tags disponíveis</Option>
      </OptionsList>
    </Container>
  )
}

export default MenuBar;