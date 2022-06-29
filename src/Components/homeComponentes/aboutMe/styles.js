import styled from "styled-components";

export const Container = styled.section`
  height: fit-content;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const AboutMeSection = styled.div`
  height: 500px;
  width: 700px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    height: 110vh;
    width: 100vw;
    flex-direction: column;

    div {
      width: 80%;
    }
  }
`;

export const ImgDiv = styled.div`
  width: 30%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  img {
    width: 150px;
    height: 150px;

    border-radius: 50%;
    border: double 4px transparent;
    background-image: linear-gradient(var(--primary), var(--secundary)),
      radial-gradient(circle at top left, var(--primary), var(--secundary));
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  @media screen and (max-width: 767px) {
    height: 35%;
  }
`;

export const AboutMeText = styled.div`
  width: 60%;
  height: 60%;
  color: var(--secundary);

  h2 {
    font-size: 2rem;
  }

  p {
    height: 190px;

    @media screen and (max-width:678px) {
      height: 270px;
    }

  }

  .CTAButton {
    color: var(--primary);
    padding: 15px 5px;
  }
`;
