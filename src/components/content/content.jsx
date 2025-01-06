import style from './content.module.css';
import { Link } from "react-router-dom";
import { useContext } from "react";
import ProductContext from "../../context/context";
import ButtonBuy from '../ButtonBuy/ButtonBuy';

export default function Content() {

  const { products, formatPrice, productsLoading, productsError } = useContext(ProductContext);
  console.log(products)

  // if (productsLoading) return <p>Carregando produtos...</p>;
  // if (productsError) return <p style={{ color: "red" }}>Erro: {productsError}</p>;

  return (
    <>
      <section className={style.containerAll}>
        {/* <aside>
          <nav className={style.menuFilter}>
            <ul>
              <h3>Departamentos</h3>
              <ul>
                <li>Produtos</li>
                <li>Categoria</li>
                <li>Outfit</li>
              </ul>
            </ul>
          </nav>
        </aside> */}

        <main className={style.secaoAnuncios}>
          {products && products.map((produto) => (
            <Link key={produto.id} to={`/product/${produto.id}`}>
              <div>
                <img src={produto.thumbnail} alt="Imagem do Produto" />
                <h3>{produto.title}</h3>
                <div className={style.containerPrice}>
                  <del>R$199,90</del>
                  <ins>{formatPrice(produto.price)}</ins>
                </div>
                <ButtonBuy sizeCart='ls' />
              </div>
            </Link>
          ))}
        </main>
      </section>
    </>
  );
}
