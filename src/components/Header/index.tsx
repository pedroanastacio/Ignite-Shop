import Image from 'next/image'
import Link from 'next/link'
import { Handbag, X } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useContextSelector } from 'use-context-selector'

import logoImg from '../../assets/logo.svg'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { ShoppingCartMenuContext } from '../../contexts/ShoppingCartMenuContext'

import { HeaderContainer, ShoppingCartButton } from './style'

export function Header() {
  const [numberOfItemsIncart, setNumberOfItemsInCart] = useState<number>(0)
  const items = useContextSelector(ShoppingCartContext, context => context.items)
  const toggleMenu = useContextSelector(ShoppingCartMenuContext, context => context.toggleMenu)

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

      <ShoppingCartButton onClick={toggleMenu}>
        <Handbag size={24} />

        {numberOfItemsIncart > 0 && <span>{numberOfItemsIncart}</span>}
      </ShoppingCartButton>
    </HeaderContainer>
  )
}