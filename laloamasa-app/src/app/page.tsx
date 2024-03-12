import Header from "@/components/nav/Header";
import Hero from "@/components/home/Hero";
import Recommended from "@/components/home/Recommended";
import Categories from "@/components/nav/Categories";
import About from "@/components/home/About";
import Footer from "@/components/nav/Footer";
import { playfair } from "./fonts";

export default function Home() {
  return (
    <main className="text-neutral-700">
      <Header></Header>
      <div className="p-4">
        <Hero></Hero>
        <h1 className={`${playfair.className} w-full max-w-4xl mx-auto font-bold bg-white text-center text-3xl pt-5 pb-5`}>Los favoritos de lalo</h1>
        <Recommended></Recommended>
        <h1 className={`${playfair.className} w-full max-w-4xl mx-auto font-bold bg-white text-center text-3xl pt-5 pb-5`}>Categorías</h1>
        <Categories></Categories>
        <About></About>
      </div>
      <Footer></Footer>
    </main>
  );
}
