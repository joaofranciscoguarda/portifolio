import styled from "styled-components";

export const StyledBurger = styled.div`
  width: 4rem;
  height: 2rem;
  /* position: absolute; */
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open, color }) => (open ? 'var(--secundary)' : color)};
    border-radius: 10px;
    transform-origin: 1px;
    transition: transform 0.5s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &.split {
      width: ${({ open }) => (open ? '2rem' : '2rem')};
      height: 0.25rem;
      display: flex;
      flex-direction: row;
      opacity: ${({ open }) => (open ? 0 : 1)};
      
      div {
        width: 50%;
        transition: transform 0.5s, opacity 0.1s;
      }

      .split:nth-child(1) {
        transform: ${({ open }) =>
          open ? "translateX(-10px)" : "translateX(0)"};
        opacity: ${({ open }) => (open ? 0 : 1)};
      }
      .split:nth-child(2) {
        transform: ${({ open }) =>
          open ? "translateX(20px)" : "translateX(0)"};
        opacity: ${({ open }) => (open ? 0 : 1)};
      }
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
