import Image from 'next/image'
import Link from 'next/link'
import { Handbag } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useContextSelector } from 'use-context-selector'


import logoImg from '../../assets/logo.svg'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'

import { HeaderContainer, ShoppingCartButton } from './style'

export function Header() {
    const items = useContextSelector(ShoppingCartContext, (context) => {
      return context.items
    })

    const [numberOfItemsIncart, setNumberOfItemsInCart] = useState(0)

    useEffect(() => {
      setNumberOfItemsInCart(items.length)
    }, [items])
  
    return (
        <HeaderContainer>
          <Link href="/">
            <a>
              <Image src={logoImg} alt="" />
            </a>
          </Link>

          <ShoppingCartButton>
            <Handbag size={24} />

            {numberOfItemsIncart > 0 && <span>{numberOfItemsIncart}</span>}
          </ShoppingCartButton>
        </HeaderContainer>
    )
}