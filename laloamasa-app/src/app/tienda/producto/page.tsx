import Header from "@/components/nav/Header";
import Footer from "@/components/nav/Footer";
import ProductView from "@/components/store/ProductView";
import Recommended from "@/components/home/Recommended";
import { playfair } from "@/app/fonts";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="p-4">
        <ProductView 
          productDescription="Esta es la breve descripcion del producto, tiene texto para describir el producto claramente."
          productName="Nombre del producto"
          productImageUrl="https://lh3.googleusercontent.com/pw/ABLVV878K2siiOxjrivdmslLAWDNfi07IPpaDrblf3x63xBaTGxuP6HSuoHGE31aSbSy80hpssHOCSpScyVWyMBBHR6SDy57PY7JLjEjmL2okJqysmD92B6F8WznCnJM7MqJ05jQz3X9o7G_ruOCfLdKJitvow=w1039-h1385-s-no-gm?authuser=0"
          productPrice={1000}
          productId=""
        />
        <div className="mt-5">
        <h1 className={`${playfair.className} w-full max-w-4xl mx-auto font-bold bg-white text-center text-3xl pt-5 pb-5`}>Mirá también:</h1>
          <Recommended />
        </div>
      </div>
      <Footer />
    </main>
  );
}
