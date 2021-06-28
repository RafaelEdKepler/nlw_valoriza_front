import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
  width: ${px2vw(1064)};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ContainerList = styled.div`
  height: ${px2vw(781)};
  width: ${px2vw(529)};
  margin: ${px2vw(30)};
  background: var(--grey);
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

export const ListTitle = styled.h2`
  font-weight: 1000;
  font-size: 1.25rem;
  colo: var(--black);
  margin: ${px2vw(10)} 0 ${px2vw(20)} ${px2vw(10)};
`;

export const Ticket = styled.div`
  width: ${px2vw(431)};
  height: ${px2vw(173)};
  color: var(--white);
  background: var(--yellow);
  margin: 0 0 ${px2vw(20)} ${px2vw(10)};
  display: flex;
  flex-direction: column;
  padding: ${px2vw(10)};
  justify-content: left;

  &:hover {
    border-style: solid;
    border-color: var(--black);
    box-shadow: ${px2vw(1)} ${px2vw(1)} ${px2vw(1)} var(--black);
    cursor: pointer;
  }
`;

export const TicketTitle = styled.h2`
  font-weight: 1000;
  font-size: 1.25rem;
`;

export const Tags = styled.span`
  font-size: 1rem;
  font-weight: 400;
  margin: ${px2vw(10)} 0;
`;

export const Content = styled.span`
  font-size: 1rem;
  font-weight: 1000;
`;

