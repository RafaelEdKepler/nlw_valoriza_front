import React from "react";
import { Container, ContainerList, ListTitle, Ticket, Content, Tags, TicketTitle } from "./style";

const InitialList = () => {
  return (
    <Container>
      <ContainerList>
        <ListTitle>Recebidos</ListTitle>
        <Ticket>
          <TicketTitle>Recebido de: Kellin</TicketTitle>
          <Tags>#Inspiração</Tags>
          <Content>
            Você é uma pessoa muito simpática.
          </Content>
        </Ticket>
      </ContainerList>
      <ContainerList>
        <ListTitle>Enviados</ListTitle>
        <Ticket>
          <TicketTitle>Enviado para: Kellin</TicketTitle>
          <Tags>#Inspiração</Tags>
          <Content>
            Você é uma pessoa muito simpática.
          </Content>
        </Ticket>
      </ContainerList>
    </Container>
  )
}

export default InitialList;