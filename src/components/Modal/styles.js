import styled from "styled-components";
import { RiCloseLine } from "react-icons/ri";

const Modal = styled.div`
  background-color: white;
  min-width: 400px;
  border: 2px solid #0078d4;
  border-radius: 10px;
  color: black;
  overflow: hidden;
`;

const ModalHeader = styled.div`
  background-color: #0078d4;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #0078d4;
  color: white;
`;

const ModalHeaderTitle = styled.p`
  margin-left: 5px;
`;

const ModalHeaderClose = styled(RiCloseLine)`
  padding: 3px;
  cursor: pointer;
  background-color: transparent;
  &:hover {
    background-color: red;
  }
  &:active {
    background-color: #af332e;
  }
`;

const ModalContainer = styled.div`
  padding: 20px 15px;
`;

const ModalContainerTitle = styled.div`
  color: blue;
  font-size: 15px;
`;

const ModalContainerDescription = styled.div`
  color: black;
`;

const ModalContainerButton = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: #f0f0f0;
  border-top: 1px solid #dfdfdf;
  padding: 10px;
`;

const ModalButton = styled.button`
  min-width: 90px;
  background-color: white;
  border: 1px solid ${({ secondary }) => (secondary ? "#d0d0d0" : "#0078d4")};
  color: black;
  border-radius: 4px;
  padding: 3px 20px;
  margin: 0px 5px;
  &:hover {
    background-color: #e0eef9;
    border: 1px solid #0078d4;
  }
  &:active {
    background-color: #cce4f7;
    border: 1px solid #005499;
  }
`;

const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  pointer-events: initial;
  font-family: "Segoe UI";
  font-size: 13px;
`;

export default {
  Modal,
  ModalHeader,
  ModalHeaderTitle,
  ModalHeaderClose,
  ModalContainer,
  ModalContainerTitle,
  ModalContainerDescription,
  ModalContainerButton,
  ModalButton,
  ModalOverlay,
};
