'use client'

import Product from "../store/Product"
import Link from "next/link"

interface ProductsProps {
  products: any,
}

export default function Products({products} : ProductsProps)  {

  return(
    <div className="max-w-4xl grid place-items-start grid-cols-2 sm:grid-cols-3 m-auto gap-x-4 bg-white p-4 gap-8 min-h-96">
      {Array.from(products)?.map((product: any) => (
        <Link key={product.id} href={`/producto/${product.id}`}>
          <Product 
            productDescription={product.descripcion}
            productId={product.id}
            productImageUrl={product.imagen[0]}
            productName={product.nombre}
            productPrice={product.precio.toLocaleString("es-AR", { style: "currency", currency: "ARS" })}
            />
        </Link>
      ))}
    </div>
  )
}