import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/global-styles";
import { Provider } from "react-redux";
import { store } from "state";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "state/store";

import theme from "styles/theme";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
