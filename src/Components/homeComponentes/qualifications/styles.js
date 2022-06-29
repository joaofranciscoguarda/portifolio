import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  .mySlider{
    width: 100%;
    .swiperSlides{
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
  }

`;

export const QualificationSection = styled.div`
  height: fit-content;
  width: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    height: 90vh;
    width: 100vw;
    flex-direction: column;

    img {
        width: 250px;
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

