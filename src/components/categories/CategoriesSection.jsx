import Flicking from "@egjs/react-flicking";
import styles from '../styles/CategoriesSection.module.scss';
import "@egjs/react-flicking/dist/flicking.css";

const categories = [
  { name: "Panes", category: "pan", imageUrl: "https://i.ibb.co/SXDfykJ/icons8-bread-100.png" },
  { name: "Budines",  category: "budin", imageUrl: "https://i.ibb.co/xX6wvCj/icons8-discount-100.png" },
  { name: "Sin TACC",  category: "sintacc", imageUrl: "https://i.ibb.co/8NCKvVL/icons8-ban-96.png" },
  { name: "Tortas",  category: "torta", imageUrl: "https://i.ibb.co/wgvBX6m/icons8-cake-100.png" },
  { name: "Salados",  category: "salado", imageUrl: "https://i.ibb.co/09MWN3x/icons8-cookies-100-1.png" },
  { name: "Box de regalo",  category: "box", imageUrl: "https://i.ibb.co/ft0RzVb/icons8-gift-90.png" },
  { name: "Fiestas",  category: "fiestas", imageUrl: "https://i.ibb.co/TgTmXkF/icons8-cupcake-66.png" },
  { name: "Galletitas",  category: "galletitas", imageUrl: "" },
  { name: 'Ver Todo' ,  category: null, imageUrl: "" }
];

export default function CategoriesSection({ setSelectedCategory }) {
  return (
    <>
      <h1 className={styles.categoriesHeader}>Categorías:</h1>
      <Flicking moveType="freeScroll" align="prev" bound={true}>
        <div className={styles.categoryContainer}>
          {categories.map((category) => (
            <div
              key={category.name}
              className={styles.categoryCard}
              onClick={() => setSelectedCategory(category.category)}
            >
              <img src={category.imageUrl} alt="" />
              {category.name}
            </div>
          ))}
        </div>
      </Flicking>
    </>
  );
}
