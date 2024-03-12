import { lora } from "@/app/fonts"
import Image from "next/image"
import AddToCart from "./AddToCart"

interface ProductViewProps {
  productName: string,
  productDescription: string,
  productPrice: number,
  productImageUrl: string,
  productId: string,
}

export default function ProductView({ productName, productImageUrl, productDescription, productPrice, productId }: ProductViewProps){
  return(
    <div className="max-w-4xl mx-auto sm:flex items-center justify-start bg-white p-4 gap-x-4">
      <div className="mx-auto flex items-center justify-center  w-full p-4 max-w-sm bg-pink-100 mb-3 sm:mb-0 rounded-sm overflow-hidden">
        <Image width={1200} height={1600} alt={'image'} src={productImageUrl !== undefined ? productImageUrl : '/' }></Image>
      </div>
      <div className="p-4 pt-0">
        <h1 className={`${lora.className} text-xl font-bold mt-5 mb-3`}>
          {productName}
        </h1>
        <p className="mt-3 mb-3 text-3xl font-bold">
          ${productPrice.toLocaleString()}
        </p>
        <p className="">
          {productDescription}
        </p>
        <div className="grid grid-cols-2 place-items-start">
          <label className="flex flex-col font-bold mt-3" htmlFor="flavour">Sabor: 
            <select className='w-28 mt-1 font-normal' name="flavour">
              <option value="">Vainilla</option>
              <option value="">Naranja</option>
              <option value="">Carrot</option>
            </select>
          </label>
          <label className="flex flex-col font-bold mt-3" htmlFor="size">Con semillas: 
            <select className='w-28 mt-1 font-normal' name="size">
              <option value="false">No</option>
              <option value="true">Si</option>
            </select>
          </label>
          <label className="flex flex-col font-bold mt-3" htmlFor="salt">Sin sal/azúcar: 
            <select className='w-28 mt-1 font-normal' name="salt">
              <option value="false">No</option>
              <option value="true">Si</option>
            </select>
          </label>
        </div>
        <div className="sm:flex items-center justify-start w-auto mt-5">
          <AddToCart />
        </div>
      </div>
    </div>
  )
}