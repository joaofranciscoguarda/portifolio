import React from "react";
import { Link } from "react-router-dom";
import { ButtonStyled } from "./styles";

function Button({ BackgroundColor, text, linkTo, Width, Height, Padding, onClick, ...rest }) {
  if (linkTo) {
    return (
      <ButtonStyled
        BackgroundColor={BackgroundColor}
        Width={Width}
        Height={Height}
        Padding={Padding}
        onClick={onClick}
        {...rest}
      >
        {linkTo && <Link to={linkTo}>{text}</Link>}
      </ButtonStyled>
    );
  } else {
    return (
      <ButtonStyled
        BackgroundColor={BackgroundColor}
        Width={Width}
        Height={Height}
        Padding={Padding}
        onClick={onClick}
        {...rest}
      >
        {text}
      </ButtonStyled>
    );
  }
}

export default Button;

