import { StrictMode } from "react";
import ReactDOM from "react-dom";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import Theme from "../components/Theme/Theme.js";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>,
  rootElement
);
