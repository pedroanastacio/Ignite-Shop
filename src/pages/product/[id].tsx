import { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Stripe from 'stripe'
import Head from 'next/head'
import { useContextSelector } from 'use-context-selector'
import Skeleton from 'react-loading-skeleton'


import { stripe } from '../../lib/stripe'
import { QuantityInput } from '../../components/QuantityInput'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'

import { 
    AddToCartButton,
    ImageContainer,
    ProductContainer,
    ProductDetails,
    SkeletonContainer
} from '../../styles/pages/product'
import 'react-loading-skeleton/dist/skeleton.css'

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
    const [quantity, setQuantity] = useState<number>(1)
    const addNewItem = useContextSelector(ShoppingCartContext, context => context.addNewItem)

    const { isFallback } = useRouter()

    function onQuantityChange(quantity: number) {
        setQuantity(quantity)
    }
    
    function handleAddNewItemToShoppingCart(event: FormEvent<HTMLFormElement>) {   
        event.preventDefault()

        addNewItem({ productId: product.id, quantity})
    }

    // const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState<boolean>(false)

    // async function handleBuyProduct() {
    //     setIsCreatingCheckoutSession(true)

    //     try {
    //         const response = await axios.post('/api/checkout', {
    //             priceId: product.defaultPriceId
    //         })

    //         const { checkoutUrl } = response.data

    //         window.location.href = checkoutUrl

    //     } catch (error) {
    //         setIsCreatingCheckoutSession(false)
            
    //         // Recomendado: conectar a uma ferramenta de observabilidade (Datadog / Sentry)
    //         alert('Falha ao redirecionar para checkout!')
    //     }
    // }

    if(isFallback) {
        return (
            <SkeletonContainer>
                <Skeleton width={576} height={656}/>  

                <div>
                    <h1>
                        <Skeleton height={60}/>  
                    </h1>
                    <h2>
                        <Skeleton width={150} height={60}/>  
                    </h2>
                    <p>
                        <Skeleton height={30} count={5.5}/>  
                    </p>

                    <form>
                        <Skeleton height={60}/>  
                    </form>
                </div>
            </SkeletonContainer>
        )
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

                    <form onSubmit={(e) => handleAddNewItemToShoppingCart(e)}>
                        <QuantityInput 
                            id="quantity"
                            placeholder="1" 
                            max={5} 
                            quantity={quantity}
                            setQuantity={onQuantityChange}
                        />

                        <AddToCartButton 
                            type="submit" 
                            // disabled={isCreatingCheckoutSession} 
                            // onClick={handleAddNewItemToShoppingCart}
                        >
                            Colocar na sacola
                        </AddToCartButton>
                    </form>
                </ProductDetails>
            </ProductContainer>
    </>        
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: true
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
                // defaultPriceId: price.id,
            }
        },
        revalidate: 60 * 60 * 1, // 1 hour
    }
}