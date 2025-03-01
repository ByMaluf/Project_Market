import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ProductContext from "../../context/context";
import style from "./contentProduct.module.css";
import ButtonBuy from "../ButtonBuy/ButtonBuy";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import CircularProgress from '@mui/material/CircularProgress';

export default function ContentProduct() {
  const { idProduct } = useParams();
  const { product, formatPrice, productLoading, productError, setProductId, resetProductId } = useContext(ProductContext);
  const [loadingProduct, setLoadingProduct] = useState(true);

  useEffect(() => {
    setLoadingProduct(true);
    resetProductId(); 
    setProductId(idProduct); 
  }, [idProduct, setProductId, resetProductId]);

  useEffect(() => {
    if (product) {
      setLoadingProduct(false); 
    }
  }, [product]);

  const lengthReviews = (reviews) => {
    if (!reviews) {
      return 0;
    }
    return reviews.length;
  };

  const formatDate = (date) => {
    if (!date) {
      return "Data inválida";
    }
    const parsedDate = new Date(date);
    return parsedDate.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  if (loadingProduct || productLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </div>
    );
  }

  if (productError) {
    return <p style={{ color: "red" }}>Erro: {productError}</p>;
  }

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
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '100px' }}>
              <p className={style.productPrice}>
                {formatPrice(product?.price)}
              </p>
              <ButtonBuy sizeCart="xl" className={style.buttonBuy} />
            </div>
            <div className={style.containerCep}>
              <div>
                <div className={style.cep}>
                  <label htmlFor="cep"><FontAwesomeIcon icon={faTruckFast} size="lg" color='#ffa500' /> Valor e prazo de entrega</label>
                  <input id="cep" type="text" />
                </div>
                <p><a href="#">Não lembro o meu CEP</a></p>
              </div>
              <span>
                <FontAwesomeIcon icon={faCircleExclamation} size="lg" color="#ffa500" />
                Os prazos de entrega começam a contar a partir da confirmação de pagamento
              </span>
            </div>

          </div>
        </div>
      </section>

      <section className={style.containerReviews}>
        <div className={style.headerReview}>
          <h2>Avaliação dos Usuários</h2>
          <div>
            <span className={style.rating}><strong>{product?.rating}</strong>/5</span>
            <span>{lengthReviews(product?.reviews)} Avaliações</span>
          </div>
        </div>
        <div className={style.sectionReview}>
          {product && product?.reviews.map((reviews) =>
            <div className={style.reviews} key={reviews.date}>
              <div>
                <p>{reviews.reviewerName}</p>
                <span className={style.reviewDate}>Avaliado em {formatDate(reviews?.date)}</span>
              </div>
              <p>Avaliação: {reviews.rating}</p>
              <p className={style.comments}>{reviews.comment}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
