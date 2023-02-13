import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  align-items: flex-end;
  position: sticky;
  bottom: 0;
  flex-grow: 2;
`;

const FooterContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.grayDark};
  width: 100vw;
  height: 25vh;
  border-top: 1px solid rgb(255, 255, 255, 0.2);
`;

const FooterHeader = styled.div`
  display: flex;
`;

const FooterHeaderButton = styled.button`
  padding: 8px 0px;
  margin: 0px 15px;
  border-width: inherit;
  border-bottom: 3px solid ${({ open }) => (open ? "white" : "transparent")};
  opacity: ${({ open }) => (open ? "1" : "0.4")};
  background-color: transparent;
  color: white;
  font-size: 14px;
  font-family: Consolas, "Courier New", monospace;
  &:hover {
    opacity: 1;
  }
`;

const FooterContent = styled.div`
  padding: 20px 15px;
`;

const FooterContentLine = styled.p`
  display: flex;
`;

const Point = styled.span`
  height: 15px;
  width: 4px;
  background-color: transparent;
  border: 2px solid white;
  opacity: 0.6;
`;

export default {
  Footer,
  FooterContainer,
  FooterHeader,
  FooterHeaderButton,
  FooterContent,
  FooterContentLine,
  Point,
};
