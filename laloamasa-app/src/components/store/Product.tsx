import Image from "next/image"
import { lora, manrope } from "@/app/fonts"

interface ProductProps {
  productName: string,
  productDescription: string,
  productPrice: number,
  productImageUrl: string,
  productId: string,
}

export default function Product({ productName, productImageUrl, productDescription, productPrice, productId }: ProductProps){
  return(
    <div className="max-w-52">
      <div className="flex items-center justify-center w-full max-h-52 max-w-40 mx-auto bg-pink-100 mb-3 rounded-sm overflow-hidden">
        <Image width={1200} height={1600} alt={'image'} src={productImageUrl}></Image>
      </div>
      <h1 className={`${lora.className} text-md font-bold`}>{productName}</h1>
      <p className={`${manrope.className} text-ellipsis text-xs`}>{productDescription}</p>
      <p className="text-end font-bold">{`${productPrice}`}</p>
    </div>
  )
}