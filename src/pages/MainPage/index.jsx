import React from "react";

import { Container } from "./styles";
import githubLogo from "../../assets/images/github-logo.svg"

export default function MainPage() {
  return (
    <Container>
      <img
      src={githubLogo}
      alt="API GitHub" />
    </Container>
  );
}
