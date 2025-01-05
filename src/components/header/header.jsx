import { Link } from 'react-router-dom';
import style from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <header className={style.containerHeader} >
      <div className={style.cabecalho}>
        <div className={style.containerImg}>
          <img src="" alt="" />
          <h1><Link to={'/'}>ByMarket</Link></h1>
        </div>
        <nav>
          <ul>
            <li className={style.itemNavigation}><FontAwesomeIcon icon={faUser} size='sm' /> <a href="#"> Minha Conta</a></li>
            <li className={style.itemNavigation}><FontAwesomeIcon icon={faHeart} size='sm' /> <a href="#"> Meus Favoritos</a></li>
            <li className={style.itemNavigation}><FontAwesomeIcon icon={faCartShopping} size='sm' /><a href="#">  Carrinho</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}