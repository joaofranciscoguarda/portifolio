import styled from "styled-components";

export const Container = styled.section`
  height: fit-content;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const TechsSection = styled.div`
  height: 500px;
  width: 700px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    height: fit-content;
    width: 100vw;
    flex-direction: column;

    div {
      width: 80%;
    }
  }
`;

export const CardsForFakeHtml = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;

  .FakeHTML {
    align-self: flex-start;
  }
`;

export const TechsCard = styled.ul`
  color: ${({ color }) => color};
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 35px;
  border-radius: 20px;
  height: 300px;
  border: 3px solid ${({ color }) => color};

  h3 {
    font-size: 32px;
    font-weight: 900;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const TechsItems = styled.li`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  height: 40px;
  font-size: 22px;

  margin-top: 5px;

  p {
    width: 40%;
    text-indent: 15px;
  }

  div > span {
    color: var(--secundary);
    margin-left: 10px;
  }

  svg {
    width: 32px;
    font-size: 32px;
    margin-left: 15px;
  }
`;
