import { createContext, useState } from "react";
import PropTypes from "prop-types";
import useFetchData from "../customHooks/useFetchData";
import useFetchProductById from "../customHooks/useFetchDataById";

const ProductContext = createContext();

export const Context = ({ children }) => {
  const { data: products, loading: productsLoading, error: productsError } = useFetchData("https://dummyjson.com/products");
  const [productId, setProductId] = useState(null);
  const { data: product, loading: productLoading, error: productError } = useFetchProductById(productId);

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
