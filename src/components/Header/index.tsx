import Image from 'next/image'
import Link from 'next/link'
import { Handbag } from 'phosphor-react'
import { useContextSelector } from 'use-context-selector'


import logoImg from '../../assets/logo.svg'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'

import { HeaderContainer, ShoppingCartAnchor } from './styles'

export function Header() {
    const items = useContextSelector(ShoppingCartContext, (context) => {
      return context.items
    })

    const cartIsNotEmpty = items.length !== 0
    const itemsInCart = items.length
    
    return (
        <HeaderContainer>
          <Link href="/">
            <a>
              <Image src={logoImg} alt="" />
            </a>
          </Link>

          <Link href="/shopping-cart">
            <ShoppingCartAnchor>
              <Handbag size={24} />

              {cartIsNotEmpty && <span>{itemsInCart}</span>}
            </ShoppingCartAnchor>
          </Link>
        </HeaderContainer>

    )
}