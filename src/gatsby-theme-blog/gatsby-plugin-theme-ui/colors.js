import merge from "deepmerge";
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors";

const colors = {
  background: {
    dark: "#2d3748",
    light: "#f7fafc"
  },
  primary: {
    dark: "#38b2ac",
    light: "#ffffff"
  },
  heading: {
    dark: "",
    light: ""
  },
  text: {
    dark: "#718096",
    light: "#cbd5e0"
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
