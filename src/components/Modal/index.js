import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles";

const Modal = ({ show, onClose, title, subTitle, description, buttons }) => {
  if (show) {
    return ReactDOM.createPortal(
      <styles.ModalOverlay>
        <styles.Modal>
          <styles.ModalHeader>
            <styles.ModalHeaderTitle>{title}</styles.ModalHeaderTitle>
            <styles.ModalHeaderClose size="22px" onClick={() => onClose()} />
          </styles.ModalHeader>
          <styles.ModalContainer>
            <styles.ModalContainerTitle>{subTitle}</styles.ModalContainerTitle>
            <styles.ModalContainerDescription>
              {description}
            </styles.ModalContainerDescription>
          </styles.ModalContainer>
          <styles.ModalContainerButton>
            {buttons.map((button) => (
              <styles.ModalButton
                secondary={button.secondary}
                onClick={button.onClick}
              >
                {button.name}
              </styles.ModalButton>
            ))}
          </styles.ModalContainerButton>
        </styles.Modal>
      </styles.ModalOverlay>,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
