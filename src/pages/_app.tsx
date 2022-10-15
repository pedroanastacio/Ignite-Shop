import type { AppProps } from 'next/app'
import { SkeletonTheme } from 'react-loading-skeleton'

import { Header } from '../components/Header';
import { ShoppingCartProvider } from '../contexts/ShoppingCartContext';

import { globalStyles } from '../styles/global'
import { Container } from '../styles/pages/app';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShoppingCartProvider>
      <SkeletonTheme 
        baseColor="#202024"
        highlightColor="#2d2d33"
        borderRadius={8}
      >
        <Container>
          <Header />

          <Component {...pageProps} />
        </Container>
      </SkeletonTheme>
    </ShoppingCartProvider>
  )
}


