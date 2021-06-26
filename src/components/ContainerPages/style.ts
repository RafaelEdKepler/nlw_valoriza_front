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
  margin: 15 0 ${px2vw(50)} ${px2vw(15)};

  &:nth-child(2n) {
    margin-top: ${px2vw(-5)};
  }
`;