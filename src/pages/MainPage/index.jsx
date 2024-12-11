import React from "react";
import { MdSearch } from 'react-icons/md';

import { Container, Logo, Title, Form, Input, Button } from "./styles";
import githubLogo from "../../assets/images/github-logo.svg"

export default function MainPage() {
  return (
    <Container>
      <Logo
      src={githubLogo}
      alt="API GitHub" />
      <Title>Api GitHub</Title>
      <Form>
        <Input placeholder="usuário" />
        <Button>
          <MdSearch size={42} color="#F9F9F9" />
        </Button>
      </Form>
    </Container>
  );
}
