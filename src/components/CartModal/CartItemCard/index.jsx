import { MdDelete } from "react-icons/md";
import styles from "./style.module.scss"

export const CartItemCard = ({ product, removeProducts }) => {
   return (
      <li className={styles.card}>
         <div className={styles.contentCard} >
            <img src={product.img} alt={product.name} />
            <div>
               <h3 className="title">{product.name}</h3>
               <span className="title two green">{(product.price).toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
            </div>
         </div>
         <button onClick={() => removeProducts(product.id)} aria-label="delete" title="Remover item">
            <MdDelete size={21} />
         </button>
      </li>
   );
};
