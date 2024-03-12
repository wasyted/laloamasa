import { lora, manrope, playfair } from "@/app/fonts"
import Image from "next/image"
import Category from "../store/Category"
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

const categories = [
  { name: "Panes", category: "pan", imageUrl: "https://i.ibb.co/SXDfykJ/icons8-bread-100.png" },
  { name: "Budines",  category: "budin", imageUrl: "https://i.ibb.co/xX6wvCj/icons8-discount-100.png" },
  { name: "Sin TACC",  category: "sintacc", imageUrl: "https://i.ibb.co/8NCKvVL/icons8-ban-96.png" },
  { name: "Tortas",  category: "torta", imageUrl: "https://i.ibb.co/wgvBX6m/icons8-cake-100.png" },
  { name: "Salados",  category: "salado", imageUrl: "https://i.ibb.co/09MWN3x/icons8-cookies-100-1.png" },
  { name: "Box",  category: "box", imageUrl: "https://i.ibb.co/ft0RzVb/icons8-gift-90.png" },
  { name: "Fiestas",  category: "fiestas", imageUrl: "https://i.ibb.co/TgTmXkF/icons8-cupcake-66.png" },
  { name: "Galletitas",  category: "galletitas", imageUrl: "" },
  { name: 'Ver Todo' ,  category: null, imageUrl: "" }
];

export default function Categories(){
  return(
    <main>
      <div className="max-w-4xl grid place-items-center grid-cols-2 sm:grid-cols-3 m-auto gap-x-4 bg-white p-4 gap-8">
        <Category 
          categoryId=""
          categoryImageUrl="https://ipfs.filebase.io/ipfs/QmRxLvbAfHSd6zG8M6gzZMErsdrN5WpCt2BfiQHSAzoM9s/icons8-cake-100.png"
          categoryName="Tortas"
          />
      </div>
    </main>
  )
};