import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
  background-color: #1e1e1e;
  color: white;
  line-height: 1.3;
  font-family: Consolas, 'Courier New', monospace;
}
#__next {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a {
  text-decoration: none;
}
`;

const theme = {
  colors: {
    grayLightest: "#3b3c3b",
    grayLight: "#2d2d2d",
    grayMedium: "#252526",
    grayDark: "#1e1e1e",
    blueLightest: "#9cdcfe",
    blueLight: "#4fc1ff",
    blueMedium: "#569cd6",
    blueDark: "#202d39",
    yellowLight: "#dcdcaa",
    yellowMedium: "#ffb417",
    pinkMedium: "#da70b3",
    orageMedium: "#ce9178",
  },
};

export { GlobalStyle, theme };
