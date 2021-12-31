import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    primary: "#f2f2f2",
    secondary: "#db9731",
    tertiary: "#7ED1EB",
    text: "#FFFDF6",
    background: "#131313",
    link: "#9AB87A",
  },
  font: {
    size: {
      extraSmall: "14px",
      small: "16px",
      medium: "18px",
      large: "20px",
      extraLarge: "24px",
      special: "300px",
    },
    family: `font-family: 'Lora', serif;`,
  },
  spacing: {
    sectionPaddingMobile: "50px",
    sectionPaddingDesktop: "100px",
    maxWidth: "1200px",
  },
  breakpoint: {
    mobile: "375px",
    tablet: "600px",
    laptop: "1200px",
    desktop: "1600px",
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
