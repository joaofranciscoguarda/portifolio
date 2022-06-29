import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 150px;
  display: flex;
  align-items: center;

  position: relative;
`;

export const DivForFakeHtml = styled.div`
  width: 50px;
  height: 100%;

  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  color: var(--secundary);
  text-align: center;
`;

export const IconsDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  a {
    padding: 0;
  }

  svg {
    font-size: 32px;
  }

  @media screen and (min-width:768px) {
    width: 300px;
  }
`;
