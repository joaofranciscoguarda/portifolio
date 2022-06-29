import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  top: ${({scrollDirection}) => scrollDirection === 'down' ? '-80px' : '0px' };
  right: 0;

  background-color: var(--background);
  
  padding: 15px;
  box-shadow: 0 0 5px 1px rgba(8,253,216, 0.5);

  position: fixed;
  transition: all 1s ease-in-out;
  z-index: 98;

  .li__qualifications {
    display: none;
  }

  .li__contact {
    background-color: black;
    border-radius: 10px;
    padding: 10px 15px;
  }

  @media screen and (max-width: 600px) {
    .li__qualifications {
      display: block;
    }
  }
`;

export const SpanLogo = styled.span`
  font-size: 20px;
  font-family: var(--pacifico);
  opacity: 1;

  @media screen and (min-width: 425px) {
    font-size: 32px;
  }
  @media screen and (min-width: 765px) {
    font-size: 40px;
  }
`;
