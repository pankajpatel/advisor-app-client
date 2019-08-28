import React from "react";
import { Container, Header, H1 } from "../styled";

export default props => (
  <Header>
    <Container>
      <H1>{props.name}</H1>
    </Container>
  </Header>
);
