import style from './content.module.css';
import useFetchData from "../../fetch/fetchData";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


export default function Content() {
  const { data, loading, error } = useFetchData('https://dummyjson.com/products');
  console.log(data)

  function formatPrice(price) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  }

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
          {data && data.products.map((produto) => (
            <Link key={produto.id} to={`/product/${produto.id}`}>
              <div>
                <img src={produto.images[0]} alt="Imagem do Produto" />
                <h3>{produto.title}</h3>
                <div className={style.containerPrice}>
                  <del>R$199,90</del>
                  <ins>{formatPrice(produto.price)}</ins>
                </div>
                <button className={style.comprar}><FontAwesomeIcon icon={faCartShopping} size='ls' color='white' /> Comprar</button>
              </div>
            </Link>
          ))}
        </main>
      </section>
    </>
  );
}