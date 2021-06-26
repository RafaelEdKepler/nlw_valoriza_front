import React from "react";

import Background from "../src/components/Background";
import ContainerPages from "../src/components/ContainerPages";
import MenuBar from "../src/components/MenuBar";

const InitialPage = () => {
  return (
    <Background>
      <MenuBar/>
      <ContainerPages title="Bem vindo, Rafael!" subtitle="Veja seus elogios enviados e recebidos recentemente!">
        
      </ContainerPages>
    </Background>
  )
}

export default InitialPage;