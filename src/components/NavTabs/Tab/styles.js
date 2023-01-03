import styled from "styled-components";
import { SiJavascript } from "react-icons/si";
import { RiCloseLine } from "react-icons/ri";

const Tab = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  minWidth: "120px",
  width: "max-content",
  height: "30px",
  borderLeft: `3px solid ${theme.colors.grayMedium}`,
  borderRight: `3px solid ${theme.colors.grayMedium}`,
  fontSize: "12px",
  padding: "0px 13px",
  backgroundColor: theme.colors.grayLight,
  cursor: "pointer",
  span: {
    opacity: "0.4",
  },
}));
const Icon = styled(SiJavascript)`
  color: #dd6225;
  opacity: 0.4;
`;
const Close = styled(RiCloseLine)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  maxWidth: "20px",
  maxHeight: "20px",
  padding: "4px",
  borderRadius: "4px",
  [`${Tab}:hover &`]: {
    opacity: 1,
  },
  "&:hover": {
    backgroundColor: theme.colors.grayLightest,
  },
}));

export default {
  Tab,
  Icon,
  Close,
};
