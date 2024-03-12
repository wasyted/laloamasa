import Product from "../store/Product"
import { Suspense } from "react"
import ProductSkeleton from "../store/ProductSkeleton"

export default function Recommended(){
  return(
    <div className="max-w-4xl grid place-items-center grid-cols-2 sm:grid-cols-3 m-auto gap-x-4 bg-white p-4 gap-8">
      
      <Suspense fallback={<ProductSkeleton />}>
        <Product 
          productDescription="Este es un producto de laloamasa"
          productId="123"
          productImageUrl="https://lh3.googleusercontent.com/pw/ABLVV878K2siiOxjrivdmslLAWDNfi07IPpaDrblf3x63xBaTGxuP6HSuoHGE31aSbSy80hpssHOCSpScyVWyMBBHR6SDy57PY7JLjEjmL2okJqysmD92B6F8WznCnJM7MqJ05jQz3X9o7G_ruOCfLdKJitvow=w1039-h1385-s-no-gm?authuser=0"
          productName="Un producto"
          productPrice={3.99}
          />
        </Suspense>
    </div>
  )
}