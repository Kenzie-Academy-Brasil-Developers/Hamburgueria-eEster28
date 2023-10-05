import { ProductCard } from "./ProductCard";

export const ProductList = ({ productList, addProducts }) => {
   return (
      <ul>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} addProducts={addProducts} />
         ))}
      </ul>
   );
};
