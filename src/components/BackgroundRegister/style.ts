import styled from "styled-components";

import px2vw from "../../utils/px2vw";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url("./login.png");
  background-size: cover;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: var(--white);
  padding ${px2vw(-70)};
`;

