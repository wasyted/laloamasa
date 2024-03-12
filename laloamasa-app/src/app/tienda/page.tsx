'use client'

import Header from "@/components/nav/Header";
import Banner from "@/components/store/Banner";
import PageSelection from "@/components/nav/PageSelection";
import Footer from "@/components/nav/Footer";
import { playfair } from "../fonts";
import Products from "@/components/store/Products";
import ProductQueryStats from "@/components/nav/ProductQueryStats";
import FilterProducts from "@/components/nav/FilterProducts";
import CategoriesSection from '@/components/store/CategoriesSection';
import { useState, useEffect } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/data/productos.json');
      const data = await response.json();
      setProducts(data.productos);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts()
  }, []);
  return (
    <main className="text-stone-700">
      <Header />
      <div className="p-4">
        <Banner />
        <h1 className={`${playfair.className} w-full max-w-4xl mx-auto font-bold bg-white text-center text-3xl pt-5 pb-5`}>Productos por categoría</h1>
        <div className="max-w-4xl mx-auto">
          <CategoriesSection />
        </div>
        <div className="flex items-center justify-between bg-white pt-5 pb-5 max-w-4xl mx-auto px-4">
          <ProductQueryStats productsLength={products.length}/>
          <div className="flex items-center">
            <p className="mr-3">Filtrar por:</p>
            <FilterProducts />
          </div>
        </div>
        <Products products={products}/>
        <PageSelection />
      </div>
      <Footer />
    </main>
  );
}
