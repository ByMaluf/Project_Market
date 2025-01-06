import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import style from './buttonBuy.module.css';


export default function ButtonBuy() {
  return (
    <button className={style.comprar}>
      <FontAwesomeIcon className={style.cart} icon={faCartShopping} size="ls" color="white" />
      Comprar
    </button>
  );
}