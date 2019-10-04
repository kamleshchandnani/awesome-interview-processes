import merge from "deepmerge";
import typography from "./typography";
import colors from "./colors";
import styles from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/styles";
import prism from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/prism";

export default merge(typography, {
  initialColorMode: `light`,
  colors,
  fonts: {
    heading: `"Varela Round", sans-serif`,
    monospace: `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`
  },
  sizes: {
    container: 672
  },
  styles,
  prism
});
