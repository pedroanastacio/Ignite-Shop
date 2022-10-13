import type { AppProps } from 'next/app'
import Image from 'next/image';
import Link from 'next/link';
import { Handbag } from 'phosphor-react'

import { Container, Header, ShoppingCartAnchor } from '../styles/pages/app';
import logoImg from '../assets/logo.svg'

import { globalStyles } from '../styles/global'

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />

        <Link href="/shopping-cart">
          <ShoppingCartAnchor>
            <Handbag size={24} />

            <span>1</span>
          </ShoppingCartAnchor>
        </Link>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}


