import Image from "next/image"
import { lora } from "@/app/fonts"

interface CategoryProps {
  categoryName: string,
  categoryImageUrl: string,
  categoryId: string,
}

export default function Category({ categoryName, categoryImageUrl, categoryId }: CategoryProps){
  return(
    <a className="" href="">
      <div className="w-full max-w-52">
        <div className="flex items-center justify-center w-32 h-24 bg-pink-100 p-10 mb-3 rounded-sm overflow-hidden ">
          <Image className="hover:scale-110 transition-all" width={1200} height={1600} alt={'image'} src={categoryImageUrl}></Image>
        </div>
        <h1 className={`${lora.className} text-md font-bold text-center`}>{categoryName}</h1>
      </div>
    </a>
  )
}
