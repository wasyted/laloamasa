import { manrope, playfair } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import Button from "../buttons/Button";

export default function Hero(){
  return(
    <div className="max-w-4xl flex items-center justify-center sm:justify-between flex-wrap sm:flex-nowrap m-auto gap-x-4 bg-white p-4">
      <div className="flex items-center justify-start max-w-96 mb-5 sm:mb-0 sm:max-w-xs rounded-sm overflow-hidden">
        <Image className="" alt='Hero image' width={1200} height={1600} src='https://ipfs.filebase.io/ipfs/QmRxLvbAfHSd6zG8M6gzZMErsdrN5WpCt2BfiQHSAzoM9s/IMG-20220729-WA0015.jpg'></Image>
      </div>
      <div className="max-w-md px-8">
        <h1 className={`${playfair.className} text-4xl mb-5`}>Probá todo lo que tengo para ofrecerte en @laloamasa:</h1>
        <p className={`${manrope.className} text-md mb-5`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, eos maxime ullam aliquid expedita tempora eveniet pariatur nam repellendus, omnis iure harum aspernatur nostrum aut perferendis neque dicta repudiandae quia!
        </p>
        <Link href="/tienda">
          <Button text="Ir a la tienda"></Button>
        </Link>
      </div>
    </div>
  )
}