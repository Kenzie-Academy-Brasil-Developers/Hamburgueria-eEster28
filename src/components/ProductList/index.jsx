import { ProductCard } from "./ProductCard";
import styles from "./style.module.scss"

export const ProductList = ({ productList, addProducts }) => {
   return (
      <ul className={styles.conteinerCard}>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} addProducts={addProducts} />
         ))}
      </ul>
   );
};
