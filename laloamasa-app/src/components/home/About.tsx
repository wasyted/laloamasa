import { manrope, playfair } from "@/app/fonts"
import Image from "next/image"
import Button from "../buttons/Button"

export default function About(){
  return(
    <div className="max-w-4xl flex items-center justify-center sm:justify-between flex-wrap sm:flex-nowrap m-auto gap-x-4 bg-white p-4 pt-5">
      <div className="flex items-center justify-start max-w-96 mb-5 sm:mb-0 sm:max-w-xs rounded-sm overflow-hidden">
        <Image className="" alt='Hero image' width={1200} height={1600} src='https://scontent.cdninstagram.com/v/t51.2885-15/343498867_3465563120396251_1455291630159784398_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzNTAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=z6Afmf8HVtIAX8zeyNp&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzA5MDUxMTk0ODA4NTQ4NTU5Ng%3D%3D.2-ccb7-5&oh=00_AfB6fn6ZSLw2ghHn-2aOuFrkJohtxS7_e-1lvpVrufHGQg&oe=65E651CC&_nc_sid=10d13b'></Image>
      </div>
      <div className="max-w-md px-8">
        <h1 className={`${playfair.className} text-4xl mb-5`}>Quien es laloamasa?</h1>
        <p className={`${manrope.className} text-md mb-5`}>
          Soy Lore, amaso en casa y con amor productos convencionales, sin gluten, apto diabéticos y veganos! Todo es mas rico hecho con amor, hace click abajo para conocerme más!
        </p>
        <Button text="Sobre mi"></Button>
      </div>
    </div>
  )
}