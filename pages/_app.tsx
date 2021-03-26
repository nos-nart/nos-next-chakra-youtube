import React from 'react';
export type AppRenderProps = {
  err?: Error
  Component: NextComponentType<NextPageContext, AppRenderProps, object>
  router: NextRouter,
  cookies?: string
} & AppProps;
import type { AppProps /*, AppContext */ } from 'next/app';
import type { NextComponentType, NextPageContext } from 'next';
import type { NextRouter } from 'next/router';

import { Chakra } from '../Chakra';

export default function App({ Component, pageProps, cookies }: AppRenderProps) {
  return (
    <Chakra cookies={cookies}>
      <Component {...pageProps} />
    </Chakra>
  );
}

export { getServerSideProps } from '../Chakra';