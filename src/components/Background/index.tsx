import React from "react";

import { Container } from "./style";

const Background = ({children}) => {
  return(
    <Container>
      {children}
    </Container>
  );
}

export default Background;