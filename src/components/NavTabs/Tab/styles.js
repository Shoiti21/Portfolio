import styled from "styled-components";
import { SiJavascript } from "react-icons/si";
import { RiCloseLine } from "react-icons/ri";
import Link from "next/link";

const Tab = styled.div(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  width: "max-content",
  height: "30px",
  borderLeft: `1.5px solid ${theme.colors.grayMedium}`,
  borderRight: `1.5px solid ${theme.colors.grayMedium}`,
}));

const ButtonLink = styled(Link)(({ active, theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "100%",
  color: "white",
  fontSize: "12px",
  padding: "0px 10px",
  paddingLeft: 10,
  paddingRight: 35,
  backgroundColor: active ? theme.colors.grayDark : theme.colors.grayLight,
  cursor: "pointer",
  span: {
    opacity: active ? "1" : "0.4",
  },
}));
const Icon = styled(SiJavascript)`
  color: yellow;
  opacity: ${({ active }) => (active ? "1" : "0.4")};
  margin-right: 13px;
`;
const Close = styled(RiCloseLine)(({ theme }) => ({
  position: "absolute",
  right: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  padding: "4px",
  borderRadius: "4px",
  cursor: "pointer",
  marginRight: 7,
  [`${Tab}:hover &`]: {
    opacity: 1,
  },
  "&:hover": {
    backgroundColor: theme.colors.grayLightest,
  },
}));

export default {
  Tab,
  ButtonLink,
  Icon,
  Close,
};
