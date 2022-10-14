import type { AppProps } from 'next/app'
import Image from 'next/image';
import Link from 'next/link';
import { Handbag } from 'phosphor-react'

import { Header } from '../components/Header';
import { Container } from '../styles/pages/app';
import { ShoppingCartProvider } from '../contexts/ShoppingCartContext';

import { globalStyles } from '../styles/global'

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShoppingCartProvider>
      <Container>
        <Header />

        <Component {...pageProps} />
      </Container>
    </ShoppingCartProvider>
  )
}


