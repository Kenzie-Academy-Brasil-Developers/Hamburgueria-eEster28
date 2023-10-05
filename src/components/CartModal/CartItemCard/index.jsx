import { MdDelete } from "react-icons/md";

export const CartItemCard = ({ product, removeProducts }) => {
   return (
      <li>
         <div>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <span>{(product.price).toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
         </div>
         <button onClick={()=> removeProducts(product.id)}  aria-label="delete"  title="Remover item">
            <MdDelete size={21} />
         </button>
      </li>
   );
};
