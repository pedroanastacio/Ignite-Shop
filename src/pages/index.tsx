import { MouseEvent } from 'react'
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useKeenSlider } from 'keen-slider/react'
import Stripe from 'stripe'
import { Handbag } from 'phosphor-react'
import { useContextSelector } from 'use-context-selector';

import { stripe } from "../lib/stripe";
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';

import { HomeContainer, Product } from "../styles/pages/home";
import 'keen-slider/keen-slider.min.css'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const addNewItem = useContextSelector(ShoppingCartContext, context => {
    return context.addNewItem
  })

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.5,
      spacing: 48,
    }
  })

  function handleAddNewItemToShoppingCart(event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, productId: string) {
    event.stopPropagation()

    addNewItem({ productId, quantity: 1})
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => {
          return (
            <Link key={product.id} href={`/product/${product.id}`} prefetch={false}>
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} alt="" width={520} height={480} />

                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>

                  <button onClick={(event) => handleAddNewItemToShoppingCart(event, product.id)}>
                    <Handbag size={32} />
                  </button>
                </footer>
              </Product>
            </Link>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    const priceInCents = price.unit_amount as number

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(priceInCents / 100),
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}