import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./style.module.scss"

export const CartModal = ({ cartList, setVisible, removeProducts, removeAllProducts }) => {

   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div className={styles.modalOverlar} role="dialog">
         <div className={styles.modalContainer}>

            <div className={styles.closeModal}>
               <h2 className="title title1">Carrinho de compras</h2>
               <button aria-label="close" title="Fechar" onClick={() => setVisible(false)} >
                  <MdClose size={21} />
               </button>
            </div>

            <div>
               <ul className={styles.containerCard} >
                  {cartList.map((product) => (
                     <CartItemCard
                        key={product.id}
                        product={product}
                        removeProducts={removeProducts}
                     />
                  ))}
               </ul>
            </div>

            <div className={styles.lastModal}>
               <div className={styles.sumValue}>
                  <span className="title two">Total</span>
                  <span className="title two grey">{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
               </div>
               <button onClick={removeAllProducts} className="title two btn2">Remover todos</button>
            </div>
         </div>
      </div>
   );
};
