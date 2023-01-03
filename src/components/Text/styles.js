import styled from "styled-components";

const handleColorType = (color, theme) => {
  switch (color) {
    case "blue-lightest":
      return theme.colors.blueLightest;
    case "blue-light":
      return theme.colors.blueLight;
    case "blue-medium":
      return theme.colors.blueMedium;
    case "yellow-light":
      return theme.colors.yellowLight;
    case "yellow-medium":
      return theme.colors.yellowMedium;
    case "pink-medium":
      return theme.colors.pinkMedium;
    case "orage-medium":
      return theme.colors.orageMedium;
    case "green":
      return theme.colors.green;
    default:
      return "white";
  }
};

const Text = styled.span(({ color, theme }) => ({
  color: handleColorType(color, theme),
}));

const Link = styled.a(({ color, theme }) => ({
  textDecoration: "none",
  color: handleColorType(color, theme),
  borderWidth: 0,
  "&:hover": {
    borderBottom: `1px solid ${handleColorType(color, theme)}`,
  },
}));

export default {
  Text,
  Link,
};
