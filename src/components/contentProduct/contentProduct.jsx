import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import ProductContext from "../../context/context";
import style from "./contentProduct.module.css";
import ButtonBuy from "../ButtonBuy/ButtonBuy";

export default function ContentProduct() {
  const { idProduct } = useParams();
  console.log(idProduct)
  const { product, formatPrice, productLoading, productError, setProductId } = useContext(ProductContext);

  useEffect(() => {
    setProductId(idProduct);
    console.log(product)
  }, [idProduct, setProductId, product]);

  // if (productLoading) return <p>Carregando...</p>;
  // if (productError) return <p style={{ color: "red" }}>Erro: {productError}</p>;

  return (
    <div className={style.productContainer}>
      <section>
        <h1>{product?.title}</h1>
        <div className={style.containerDetailsProduct}>
          <div>
            <img src={product?.images[0]} alt={product?.title} className={style.productImage} />
          </div>

          <div className={style.detailsProduct}>
            <span>Vendido e entregue por: <span className={style.byMarket}>ByMarket</span> | <strong>Em estoque</strong></span>
            <p>{product?.description}</p>
            <p className={style.productPrice}>
              {formatPrice(product?.price)}
            </p>
            <ButtonBuy />
          </div>
        </div>
      </section>

      <section>
        <h2>Comentários dos Usuários</h2>
        {product && product?.reviews.map((reviews) =>
          <>
            <span>{reviews.date}</span>
            <p>{reviews.reviewerName}</p>
            <p>Avaliação: {reviews.rating}</p>
            <p key={reviews.date}>{reviews.comment}</p>
          </>
        )}
      </section>
    </div>
  );
}
