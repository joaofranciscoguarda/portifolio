import Button from "../Button";
import { Toggle, Modal, DivHeader, DivContent } from "./styled";

function Popup(props) {
  const { title, children, openPopup, handleClosePopup } = props;

  return (
    <Toggle openPopup={openPopup}>
      <Modal>
        <DivHeader>
          <h4>{title}</h4>
          <Button
            text={"X"}
            onClick={handleClosePopup()}
            BackgroundColor={"var(--white)"}
          />
        </DivHeader>
        <DivContent>{children}</DivContent>
      </Modal>
    </Toggle>
  );
}

export default Popup;
