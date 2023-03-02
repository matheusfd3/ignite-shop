import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";

import {useKeenSlider} from 'keen-slider/react';

import { stripe } from "@/lib/stripe";
import { HomeContainer, Product } from "@/styles/pages/home";

import 'keen-slider/keen-slider.min.css';
import Stripe from "stripe";
import Head from "next/head";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => {
          return (
            <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} alt="" width={520} height={480} />
                <footer>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
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
    expand: ['data.default_price'] // Fazer com o price também venha na lista de produtos, se for só um único item, substitua por ['default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price // Como fizemos expand response no preço, nós sabemos que essa propriedade é um Price. Antes ela podia ser um Id também.

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount ? new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100) : null, // O preço vem em centavos, evita problemas de virgula, float...
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 horas
  }
}