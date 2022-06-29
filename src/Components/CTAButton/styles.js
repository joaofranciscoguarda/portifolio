import styled from "styled-components";

export const Container = styled.a`
  background-color: var(--background);
  color: ${({ color }) => color};
  padding: 20px 35px;
  border: 1px solid ${({ color }) => color};
	border-radius: 8px;

  &:hover {
    border: 1px solid ${({ hoverColor }) => hoverColor};
    color: ${({ hoverColor }) => hoverColor};
    
    transform: scale(1.1);
  }
`;
