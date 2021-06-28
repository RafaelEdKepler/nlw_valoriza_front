import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
  height: 100vh;
  background: var(--white);
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: var(--black);
  font-size: 1.4rem;
  margin: ${px2vw(10)} 0 ${px2vw(10)} ${px2vw(25)};

  &:nth-child(2n) {
    margin-top: ${px2vw(-5)};
  }
`;