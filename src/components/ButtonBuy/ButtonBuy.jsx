import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import style from './buttonBuy.module.css';

export default function ButtonBuy({ sizeCart }) {
  return (
    <button className={`${style.comprar}`}>
      <FontAwesomeIcon className={style.cart} icon={faCartShopping} size={sizeCart} color="white" />
      Comprar
    </button>
  );
}

ButtonBuy.propTypes = {
  sizeCart: PropTypes.string.isRequired,
  sizeBuy: PropTypes.string.isRequired,
};