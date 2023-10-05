import styles from "./style.module.scss"

export const ProductCard = ({ product, addProducts }) => {
    return (
        <li className={styles.card}>

            <div className={styles.image}>
                <img src={product.img} alt={product.name} />
            </div>

            <div className={styles.information}>
                <h3 className="title">{product.name}</h3>

                <span className=" title three">{product.category}</span>

                <span className="title two green">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}
                </span>

                <button className="title two btn" onClick={() => addProducts(product)}>Adicionar</button>
            </div>
        </li>
    )
}