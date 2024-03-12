import { manrope, playfair } from "@/app/fonts"
import Image from "next/image"
import Button from "../buttons/Button"

export default function Banner(){
  return(
    <div className="max-w-4xl flex items-center justify-center sm:justify-between flex-wrap sm:flex-nowrap m-auto gap-x-4 bg-white p-4">
      <div className="flex items-center justify-start max-h-72 mb-5 sm:mb-0 sm:max-w-sm rounded-sm overflow-hidden">
        <Image priority className="" alt='Hero image' width={1200} height={1600} src='https://scontent.cdninstagram.com/v/t51.2885-15/312175775_145540118193682_474013694619272487_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzNTAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=OuzusrcE4CcAX-8zzFH&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjk1NDc0MTk2NDY5NzI5MDYzOA%3D%3D.2-ccb7-5&oh=00_AfAG-PuOler18yIHLgTXAXrgvvlLSbBzIncMnQSoXbvEGw&oe=65E77333&_nc_sid=10d13b'></Image>
      </div>
      <div className="max-w-md sm:px-8">
        <h1 className={`${playfair.className} text-4xl mb-5`}>En pedidos mayores a $10.000, ¡Envío gratis!</h1>
        <p className={`${manrope.className} text-sm mb-5`}>
          Este texto explica la promocion que aparece en el inicio de la pagina, tiene que ser un poco mas largo asi que escribo estas palabras extras.
        </p>
        <Button text="Ver disponibilidad"></Button>
      </div>
    </div>
  )
}