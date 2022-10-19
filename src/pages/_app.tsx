import { NextPage } from 'next';
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton'

import { Header } from '../components/Header';
import { ShoppingCart } from '../components/ShoppingCart';
import { ShoppingCartProvider } from '../contexts/ShoppingCartContext';
import { ShoppingCartMenuProvider } from '../contexts/ShoppingCartMenuContext';
import { DefaultLayout } from '../layouts/DefaultLayout';

import { globalStyles } from '../styles/global'
import { Container } from '../styles/pages/app';

globalStyles();

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <SkeletonTheme
      baseColor="#202024"
      highlightColor="#2d2d33"
      borderRadius={8}
    >
      <ShoppingCartProvider>
        <Container>
            {getLayout(<Component {...pageProps} />)}
        </Container>
      </ShoppingCartProvider>
    </SkeletonTheme >
  )
}


