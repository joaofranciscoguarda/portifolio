import styled from "styled-components";

export const Container = styled.section`
  height: fit-content;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const ProjectsSection = styled.div`
  height: fit-content;
  width: 720px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  @media screen and (max-width: 767px) {

    width: 100vw;
    justify-content: center;
  }
`;

export const CardsForFakeHtml = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;

  .FakeHTML {
    align-self: flex-start;
  }
`;

export const CardProject = styled.div`
  width: 300px;
  height: 350px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  border: 1px solid ${({ color }) => color};
  color: ${({ color }) => color};

  border-radius: 20px;

  overflow: hidden;

  img {
    border: 1px solid ${({ color }) => color};
    border-radius: 20px 20px 0px 0px;
  }

  &:hover {
    transform: scale(1.02);
    transition: ease-in-out .5s;

    border: 1px solid ${({ hoverColor }) => hoverColor};
    color: ${({ hoverColor }) => hoverColor};

    img {
      border: 1px solid ${({ hoverColor }) => hoverColor};
    }
  }
`;

export const CardImage = styled.div`
  width: 100%;
  height: auto;

  img {
    width: 100%;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    width: 90%;
  }
`;

export const ButtonsDiv = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;

  justify-content: space-evenly;

  a {
    width: 30%;
    text-align: center;

    max-width: 50%;
    padding: 5px;
  }
`;
