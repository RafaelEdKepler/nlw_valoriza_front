import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
  height: ${px2vw(781)};
  width: ${px2vw(329)};
  background: var(--grey);
  display: flex;
  flex-direction: column;
`;