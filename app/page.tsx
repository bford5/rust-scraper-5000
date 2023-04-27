import Stripe from "stripe"

import Product from "./components/product"

import ProductGrid from "./components/productGrid"

const getProducts = async () => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2022-11-15",
  })

  const products = await stripe.products.list({ limit: 10 })
  
  const productWithPrices = await Promise.all(
    products.data.map(async (product) => {
      const prices = await stripe.prices.list({product: product.id})
      const features = product.metadata.features || "" // EXTRACT metadata value from DB field "metadata", field value is called features when console.log
      return {
        id: product.id,
        name: product.name,
        unit_amount: prices.data[0].unit_amount,
        image: product.images[0],
        currency: prices.data[0].currency,
        metadata: {features},
        description: product.description,
      }
    })
  )
  return productWithPrices;
}


export default async function Home() {

  const products = await getProducts();
  // console.log(products);

  const sortedProducts = products.sort((a, b) => a.unit_amount! - b.unit_amount!);

  return (
    <section className="pb-10">
      <div className=" w-1/2 underline mx-auto"><p className="text-center text-2xl pb-2 mt-2">Home Page</p></div>
      <ProductGrid>{sortedProducts.map((product) => <Product {...product} key={product.id} />)}</ProductGrid>
    </section>
  )
}


