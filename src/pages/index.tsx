import { ReactElement, useState } from "react";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useKeenSlider } from 'keen-slider/react'
import Stripe from 'stripe'
import { CaretLeft, CaretRight } from 'phosphor-react'

import { stripe } from "../lib/stripe";
import { toBRL } from "../utils/currency";
import { NextPageWithLayout } from "./_app";

import { BackArrow, HomeContainer, NextArrow, Product } from "../styles/pages/home";
import 'keen-slider/keen-slider.min.css'
import { DefaultLayout } from "../layouts/DefaultLayout";

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

const Home: NextPageWithLayout<HomeProps> = ({ products }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [loaded, setLoaded] = useState<boolean>(false)
  const [sliderRef, sliderInstanceRef] = useKeenSlider({
    initial: 0,
    breakpoints: {
      '(min-width: 576px)': {
        slides: {
          perView: 2,
          spacing: 24,
          origin: 'center',
        }
      },
      '(min-width: 992px)': {
        slides: { 
          perView: 2,
          spacing: 48,
          origin: 'center',
        }
      },
    },
    slides: {
      perView: 1,
      spacing: 24,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product, index) => {
          return (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              prefetch={false}
            >
              <Product
                className="keen-slider__slide"
                variant={currentSlide === index ? 'shown' : 'hidden'}
              >
                <Image src={product.imageUrl} alt="" width={520} height={480} />

                <footer>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </footer>
              </Product>
            </Link>
          )
        })}

        {loaded && sliderInstanceRef.current &&
          <>
            {currentSlide !== 0 &&
              <BackArrow>
                <button onClick={(e: any) => e.stopPropagation() || sliderInstanceRef.current?.prev()}>
                  <CaretLeft size={48} />
                </button>
              </BackArrow>
            }

            {currentSlide !== sliderInstanceRef.current.track.details.slides.length - 1 &&
              <NextArrow>
                <button onClick={(e: any) => e.stopPropagation() || sliderInstanceRef.current?.next()}>
                  <CaretRight size={48} />
                </button>
              </NextArrow>
            }
          </>
        }
      </HomeContainer>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
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
      price: toBRL(priceInCents),
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}

export default Home