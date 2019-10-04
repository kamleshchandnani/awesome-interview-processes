import merge from "deepmerge";
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors";

/*
 * Want to change your theme colors?
 * Try uncommenting the color overrides below
 * to go from default purple to a blue theme
 */

const darkBlue = `#007acc`;
const lightBlue = `#66E0FF`;
const blueGray = `#282c35`;

const lightBrown = "#D8CBC7";
const darkBrown = "#130303";
const colors = {
  background: {
    dark: "#0f1927",
    light: "#e7eaf6"
  },
  primary: {
    dark: "#113f67",
    light: "#a2a8d3"
  },
  heading: {
    dark: "",
    light: ""
  },
  text: {
    dark: "#38598b",
    light: "#e7eaf6"
  }
};
export default merge(defaultThemeColors, {
  text: colors.text.dark,
  primary: colors.primary.dark,
  background: colors.background.light,
  modes: {
    dark: {
      text: colors.text.light,
      primary: colors.primary.light,
      background: colors.background.dark
    }
  }
});
