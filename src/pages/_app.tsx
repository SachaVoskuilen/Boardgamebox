import { type AppType } from 'next/app';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

import { ThemeProvider } from 'styled-components';
import { DefaultTheme, GlobalStyle, SecondaryTheme } from '@/styles';

const MyApp: AppType<{ session: Session | null }> = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <SessionProvider session={session}>
        <GlobalStyle />
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  );
};

export default MyApp;
