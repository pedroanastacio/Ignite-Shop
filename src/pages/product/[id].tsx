import { useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Stripe from 'stripe'
import Head from 'next/head'
import { useContextSelector } from 'use-context-selector'
import axios from 'axios'

import { stripe } from '../../lib/stripe'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'

import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product'


interface ProductProps {
    product: {
        id: string
        name: string
        imageUrl: string
        price: string
        description: string
        defaultPriceId: string
    }
}

export default function Product({ product }: ProductProps) {
    const addNewItem = useContextSelector(ShoppingCartContext, context => {
        return context.addNewItem
      })
    
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState<boolean>(false)

    function handleAddNewItemToShoppingCart() {   
        addNewItem({ productId: product.id, quantity: 1})
    }

    async function handleBuyProduct() {
        setIsCreatingCheckoutSession(true)

        try {
            const response = await axios.post('/api/checkout', {
                priceId: product.defaultPriceId
            })

            const { checkoutUrl } = response.data

            window.location.href = checkoutUrl

        } catch (error) {
            setIsCreatingCheckoutSession(false)
            
            // Recomendado: conectar a uma ferramenta de observabilidade (Datadog / Sentry)
            alert('Falha ao redirecionar para checkout!')
        }
    }

    return (
        <>
            <Head>
                <title>{product.name} | Ignite Shop</title>
            </Head>

            <ProductContainer>
                <ImageContainer>
                <Image src={product.imageUrl} alt="" width={520} height={480} />
                </ImageContainer>

                <ProductDetails>
                    <h1>{product.name}</h1>
                    <span>{product.price}</span>

                    <p>{product.description}</p>
            
                    <button disabled={isCreatingCheckoutSession} onClick={handleAddNewItemToShoppingCart}>
                        Colocar na sacola
                    </button>
                </ProductDetails>
            </ProductContainer>
    </>        
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
    const productId = params!.id
    
    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    })

    const price = product.default_price as Stripe.Price
    const priceInCents = price.unit_amount as number

    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(priceInCents / 100),
                description: product.description,
                defaultPriceId: price.id,
            }
        },
        revalidate: 60 * 60 * 1, // 1 hour
    }
}