import React from "react";

import { Container, Title } from "./style";

const ContainerPages = ({title, subtitle, children}) => {
  return (
    <Container>
      <Title>{title}</Title>
      {subtitle && (
        <Title>{subtitle}</Title>
      )}
      {children}
    </Container>
  )
}

export default ContainerPages;