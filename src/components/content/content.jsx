import style from './content.module.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import ProductContext from "../../context/context";

export default function Content() {

  const { products, productsLoading, productsError } = useContext(ProductContext);
  console.log(products)
  function formatPrice(price) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  }

  // if (productsLoading) return <p>Carregando produtos...</p>;
  // if (productsError) return <p style={{ color: "red" }}>Erro: {productsError}</p>;

  return (
    <>
      <section className={style.containerAll}>
        <aside>
          <nav>
            <ul>
              <h3>Departamentos</h3>
              <ul>
                <li>Produtos</li>
                <li>Categoria</li>
                <li>Outfit</li>
              </ul>
            </ul>
          </nav>
        </aside>

        <main className={style.secaoAnuncios}>
          {products && products.products.map((produto) => (
            <Link key={produto.id} to={`/product/${produto.id}`}>
              <div>
                <img src={produto.images[0]} alt="Imagem do Produto" />
                <h3>{produto.title}</h3>
                <div className={style.containerPrice}>
                  <del>R$199,90</del>
                  <ins>{formatPrice(produto.price)}</ins>
                </div>
                <button className={style.comprar}>
                  <FontAwesomeIcon className={style.card} icon={faCartShopping} size="ls" color="white" />
                  Comprar
                </button>
              </div>
            </Link>
          ))}
        </main>
      </section>
    </>
  );
}
