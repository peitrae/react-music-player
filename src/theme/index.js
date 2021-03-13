import { ThemeProvider } from "styled-components";

import GlobalStyles from "./GlobalStyles"
import colors from "./utils/colors";

const Theme = ({ children }) => (
  <ThemeProvider theme={{ colors }}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
