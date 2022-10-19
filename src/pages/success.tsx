import { GetServerSideProps } from "next";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Stripe from "stripe";

import { stripe } from "../lib/stripe";
import logoImg from "../assets/logo.svg"

import { ImageContainer, ImagesContainer, SuccessContainer } from "../styles/pages/success";

interface SuccessProps {
    customerName: string
    productImages: string[]
    totalProducts: number
}

export default function Success({ customerName, productImages, totalProducts }: SuccessProps) {
    return (
        <>
            <Head>
                <title>Compra efetuada | Ignite Shop</title>

                <meta name="robots" content="noindex" />
            </Head>

            <SuccessContainer>
                <Image src={logoImg} alt="" />

                <ImagesContainer>
                    {productImages.map((image, index) => {
                        return (
                            <ImageContainer key={image} style={{ zIndex: index }}>
                                <Image src={image} alt="" width={140} height={130} />
                            </ImageContainer>
                        )
                    })}
                </ImagesContainer>

                <h1>Compra efetuada!</h1>

                <p>
                    Uhuul <strong>{customerName}</strong>, sua compra de {totalProducts} camisetas já está a caminho da sua casa.
                </p>

                <Link href="/">
                    <a>Voltar ao catálogo</a>
                </Link>
            </SuccessContainer>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    if (!query.session_id) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    const sessionId = String(query.session_id)

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    })

    const customerName = session.customer_details?.name
    const productImages = session.line_items?.data.map(item => {
        const product = item.price?.product as Stripe.Product
        return product.images[0]
    })
    const totalProducts = session.line_items?.data.reduce((acc, item) => {
        return acc += item.quantity as number
    }, 0)

    return {
        props: {
            customerName,
            productImages,
            totalProducts
        }
    }
}