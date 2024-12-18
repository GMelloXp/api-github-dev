import React, { useState } from "react";

import { MdSearch } from 'react-icons/md';

import { Container, Logo, Title, Form, Input, Button  } from "./styles";
import githubLogo from "../../assets/images/github-logo.svg"

export default function MainPage() {

  const [login, setLogin] = useState('');

  return (
    <Container>
      <Logo
      src={githubLogo}
      alt="API GitHub" />
      <Title>Api GitHub</Title>
      <Form>
        <Input
        placeholder="usuário"
        value={login}
        onChange={(event) => setLogin(event.target.login)} />
        <Button to={`/${login}/repositories`} >
          <MdSearch size={42} color="#F9F9F9" />
        </Button >
      </Form>
    </Container>
  );
}
