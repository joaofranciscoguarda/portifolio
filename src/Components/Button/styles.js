import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: var(--background);

  width: ${(props) => props.Width};
  height: ${(props) => props.Height};
  padding: ${({Padding}) => (Padding && Padding) || '8px 12px'};

  text-align: center;

  border-radius: 8px;

  border: 0;

  a {
    color: var(--white);
  }

  &:hover {
    background-color: var(--greyVeryLight);
  }
`;
