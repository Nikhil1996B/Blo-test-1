/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import FontFaceObserver from "fontfaceobserver";
import { ConnectedRouter } from "connected-react-router";

// Use consistent styling
import "sanitize.css/sanitize.css";

import { App } from "app";

import { HelmetProvider } from "react-helmet-async";

import { configureAppStore } from "store/configureStore";

// import { ThemeProvider } from 'styles/theme/ThemeProvider';
import { createTheme, Theme, ThemeProvider } from "@material-ui/core/styles";
import themeOptions from "./styles/theme/rootTheme";
import reportWebVitals from "reportWebVitals";
import ErrorBoundary from "./app/components/ErrorBoundary/ErrorBoundary";
// Initialize languages
import "./locales/i18n";
import history from "./utils/history";

// Observe loading of Inter (to remove 'Inter', remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver("Inter", {});

// When Inter is loaded, add a font-family using Inter to the body
openSansObserver.load().then(() => {
  document.body.classList.add("fontLoaded");
});

// Store Initialization
// ------------------------------------
// Create redux store with history
const initialState = {};
const store = configureAppStore(initialState, history);

const MOUNT_NODE = document.getElementById("root") as HTMLElement;
const theme: Theme = createTheme(themeOptions);

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <HelmetProvider>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </HelmetProvider>
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  </ErrorBoundary>,
  MOUNT_NODE
);

// Hot reloadable translation json files
if (module.hot) {
  module.hot.accept(["./locales/i18n"], () => {
    // No need to render the App again because i18next works with the hooks
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
