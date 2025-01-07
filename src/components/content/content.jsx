import style from './content.module.css';
import { Link } from "react-router-dom";
import { useContext } from "react";
import ProductContext from "../../context/context";
import ButtonBuy from '../ButtonBuy/ButtonBuy';
import CircularProgress from '@mui/material/CircularProgress';

export default function Content() {

  const { products, formatPrice, productsLoading, productsError } = useContext(ProductContext);

  const Spinner = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CircularProgress />
      </div>
    );
  }

  if (productsLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </div>
    );
  }

  if (productsError) {
    return <p style={{ color: "red" }}>Erro: {productsError}</p>;
  }

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
                {productsLoading ? Spinner() : <img src={produto.thumbnail} alt="Imagem do Produto" />}
                <h3>{produto.title}</h3>
                <div className={style.containerPrice}>
                  <del>R$199,90</del>
                  <ins>{formatPrice(produto.price)}</ins>
                </div>
                <ButtonBuy />
              </div>
            </Link>
          ))}
        </main>
      </section>
    </>
  );
}
