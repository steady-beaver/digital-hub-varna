import { ThemeProvider as MuiTheme } from "@material-ui/core/styles";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { GlobalContextProvider } from "contexts/GlobalContext";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, muiTheme, theme } from "styles";

import { AuthProvider } from "contexts";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      console.error("TanStack query | message: ", error.message, query);
      toast.error(error?.message);
    },
  }),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalContextProvider>
            <QueryClientProvider client={queryClient}>
              <MuiTheme theme={muiTheme}>
                <GlobalStyles />
                <App />
                <ToastContainer position="bottom-center" />
              </MuiTheme>
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
          </GlobalContextProvider>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
