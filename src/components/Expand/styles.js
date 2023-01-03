import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";

const Icon = styled(FiChevronDown)`
  position: absolute;
  margin-top: 2px;
  left: 4px;
  opacity: 0;
  transition-duration: 0.2s;
  transform: rotate(${({ open }) => (open ? "0deg" : "-90deg")});
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;
const LineInitial = styled.div`
  white-space: nowrap;
  background-color: ${({ open, theme }) =>
    open ? theme.colors.grayDark : theme.colors.blueDark};
`;
const Ellipsis = styled.span`
  opacity: ${({ open }) => (open ? "0" : "0.6")};
  pointer-events: ${({ open }) => (open ? "none" : "auto")};
  transition-duration: 0.5s;
`;
const Item = styled.div`
  overflow: hidden;
  transition-duration: 0.2s;
`;
export default {
  Icon,
  LineInitial,
  Ellipsis,
  Item,
};
