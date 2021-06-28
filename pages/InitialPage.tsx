import React from "react";

import Background from "../src/components/Background";
import ContainerPages from "../src/components/ContainerPages";
import MenuBar from "../src/components/MenuBar";
import InitialList from "../src/components/InitialList";

const InitialPage = () => {
  return (
    <Background>
      <MenuBar/>
      <ContainerPages title="Bem vindo, Rafael!" subtitle="Veja seus elogios enviados e recebidos recentemente!">
        <InitialList/>
      </ContainerPages>
    </Background>
  )
}

export default InitialPage;