import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
  align-items: center;

  a.goToAboutMe {
    margin-bottom: 50px;
  }

  h1 :nth-child(2) {
    height: 186px;
  }

`;

export const ApresentationText = styled.div`
  margin-left: 10px;
  width: 320px;
  margin-bottom: 100px;


  h1 span {
    font-size: 40px;
  }

  p {
    margin-top: 15px;
  }

  p span {
    font-size: larger;
  }

  @media screen and (min-width: 768px) {
    font-size: larger;

    h1 {
      width: 500px;
    }

    p  {
    height: 40px;
    width: 500px;
  }
  }
`;
