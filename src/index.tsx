import { ThemeProvider as MuiTheme } from "@material-ui/core/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { GlobalContextProvider } from "context";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, muiTheme, theme } from "styles";

import App from "./App";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalContextProvider>
          <QueryClientProvider client={queryClient}>
            <MuiTheme theme={muiTheme}>
              <GlobalStyles />
              <App />
            </MuiTheme>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </GlobalContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
