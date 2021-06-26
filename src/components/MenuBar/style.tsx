import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
  height: 100vh;
  width: ${px2vw(336)};
  background: var(--blue);
  color: var(--white);
  display: flex;
  flex-direction: column; 
  align-items: center;
`;

export const BtnNewCompliment = styled.button`
  width: ${px2vw(271)};
  height: ${px2vw(52)};
  margin: ${px2vw(25)} 0;
  background: var(--yellow);
  font-size: 1.25rem;
  color: var(--white);
  padding-top: ${px2vw(10)};
  border-style: none;
`;

export const OptionsList = styled.ul`
  list-style: none;
  width: ${px2vw(336)};
`;

export const Option = styled.li`
  height: ${px2vw(50)};
  font-weight: ${props => props.selected ? "1100" : "400"};
`;