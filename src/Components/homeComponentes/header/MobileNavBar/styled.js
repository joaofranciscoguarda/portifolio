import styled from "styled-components";

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  li {
    & a {
      color: var(--primary);
      padding: 12px 6px;

      @media screen and (max-width: 768px) {
        color: var(--secundary);
      }
    }

    &:hover {
      border-bottom: 3px solid var(--secundary);
    }
  }


  opacity: 1;

  li.profile {
    display: none;
  }

  li.profile a {
    height: 150px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  li a img {
    width: 150px;
    height: 150px;

    border-radius: 50%;
    border: double 4px transparent;
    background-image: linear-gradient(var(--primary), var(--secundary)),
      radial-gradient(circle at top left, var(--primary), var(--secundary));
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  @media (max-width: 767px) {
    justify-content: space-evenly;
    flex-flow: column nowrap;
    background-color: var(--background);
    position: absolute;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: ${({ open }) => (open ? "0" : "-14rem")};
    height: 100vh;
    padding-bottom: 40vh;
    width: 20rem;
    padding-top: 3.5rem;
    transition: all 650ms ease-in-out;

    color: var(--primary);
    box-shadow: inset 7px 0 9px -7px rgba(8, 253, 216, 0.4);


    li {
      color: #fff;

      line-height: 30px;
      
    }
    li.profile {
      display: flex;
    }
  }
`;
