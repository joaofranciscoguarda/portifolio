import React from "react";
import { Container } from "./styles";

function CTAButton({ children, ...rest }) {
  return <Container className="CTAButton" {...rest}>{children}</Container>;
}

export default CTAButton;
