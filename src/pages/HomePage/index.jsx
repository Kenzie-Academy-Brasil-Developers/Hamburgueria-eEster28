import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { productsApi } from "../../services/api";

export const HomePage = () => {
  const localAddProducts = localStorage.getItem("@PRODUCTSADD")
  const [loding, setLoding] = useState(false)
  const [isVisible, setVisible] = useState(false)
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState(localAddProducts ? JSON.parse(localAddProducts) : []);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await productsApi.get("products")
        setProductList(data)
      } catch (error) {
        console.error(error)
      }
    }
    getProducts()
  }, [])

  useEffect(() => {
    localStorage.setItem("@PRODUCTSADD", JSON.stringify(cartList))

  }, [cartList])

  const addProducts = (listProduct) => {
    if (!cartList.some(cartList => cartList.id === listProduct.id)) {
      setCartList([...cartList, listProduct])

    } else {
      alert("Produto já adicionado.")
    }
  }

  const removeProducts = (productId) => {
    const newListProduct= cartList.filter(product => product.id !== productId)
    setCartList(newListProduct)
  }

  const removeAllProducts = () => {
    localStorage.removeItem("@PRODUCTSADD")
  }
 

  // useEffect montagem - carrega os produtos da API e joga em productList
  // useEffect atualização - Storage (carregar no estado)salva os produtos no local
  // adição, exclusão, e exclusão geral do carrinho
  // renderizações condições e o estado para exibir ou não o carrinho
  // filtro de busca
  // estilizar tudo com sass de forma responsiva

 

  return (
    <>
      <Header setVisible={setVisible} />
      <main>
        <ProductList 
          productList={productList} 
          addProducts={addProducts} 
        />

        {isVisible && 
        <CartModal 
          setVisible={setVisible} 
          cartList={cartList} 
          removeProducts={removeProducts}
          removeAllProducts={removeAllProducts}
        />}
      </main>
    </>
  );
};
