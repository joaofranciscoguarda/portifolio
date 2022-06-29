import styled from "styled-components";

export const Container = styled.section`
  height: fit-content;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const SkillsSection = styled.div`
  height: fit-content;
  width: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    height: 90vh;
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

export const SkillsCard = styled.ul`
  color: ${({ color }) => color};
  width: 90%;
  height: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  padding: 15px;
  border-radius: 20px;
  border: 3px solid ${({ color }) => color};

  h3 {
    font-size: 32px;
    font-weight: 900;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const SkillsItems = styled.li`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-size: 22px;

  p {
    margin-left: 15px;
  }

  svg {
    width: 40px;
    font-size: 32px;
  }
`;
