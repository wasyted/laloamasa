'use client'

import Flicking from "@egjs/react-flicking";
import styles from '@/components/store/styles/CategoriesSection.module.scss'
import "@egjs/react-flicking/dist/flicking.css";
import { lora } from "@/app/fonts";
import { useEffect, useState } from "react";

export default function CategoriesSection({categoriesProp} : any) {
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    try {
      const response = await fetch('/data/categorias.json');
      const data = await response.json();
      setCategories(data.categorias);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCategories()
  }, []);
  return (
    <Flicking moveType="freeScroll" align="prev" bound={true}>
      <div className={`${styles.categoryContainer} ${lora.className}`}>
      {categories?.map((category: any) => (
          <div
            key={category.id}
            className={styles.categoryCard}
          >
            <img src={category.imagen} alt="" />
            {category.nombre}
          </div>
      ))}
      </div>
    </Flicking>
  );
}
