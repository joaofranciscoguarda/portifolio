import styled from "styled-components";

function toggleModal(props) {
  return !props ? "none" : "flex";
}

export const Toggle = styled.div`
  display: ${(props) => toggleModal(props.openPopup)};
  background-color: rgba(33, 37, 41, 0.6);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  justify-content: center;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 24%;
  width: 295px;
  height: fit-content;
  width: 80%;
`;

export const DivHeader = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 15px;
  align-items: center;

  background-color: var(--secundary);

  border-radius: 8px 8px 0px 0px;

  h4 {
    flex-grow: 1;
  }
`;

export const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  width: 100%;

  padding: 15px 15px;

  background-color: var(--white);

  border-radius: 0px 0px 8px 8px;
`;
