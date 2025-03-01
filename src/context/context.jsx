import { createContext, useState } from "react";
import PropTypes from "prop-types";
import useFetchData from "../customHooks/useFetchData";
import useFetchProductById from "../customHooks/useFetchDataById";

const ProductContext = createContext();

export const Context = ({ children }) => {
  const { data: products, loading: productsLoading, error: productsError } = useFetchData("https://dummyjson.com/products?limit=50");
  const [productId, setProductId] = useState(null);
  const { data: product, loading: productLoading, error: productError } = useFetchProductById(productId);

  const resetProductId = () => {
    setProductId(product => product == null);
  };

  function formatPrice(price) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        productsLoading,
        productsError,
        product,
        productLoading,
        productError,
        setProductId,
        formatPrice,
        resetProductId
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

Context.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductContext; 
