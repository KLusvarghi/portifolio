/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import styles from './header.module.scss';
import classNames from 'classnames';

const Header = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <header className={styles.headerContainer}>
      <a href="a" alt="Página inicial" className={styles.logo}>
        &lt;KLusvarghi/&gt;
      </a>
      <nav
        className={classNames({
          [styles.nav]: true,
          [styles.active]: toggle === true,
        })}
      >
        <button onClick={() => setToggle(!toggle)} className={styles.btnMobile}>
          <span className={styles.hamburger}></span>
        </button>
        <ul id="menu" className={styles.menu}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Sobre mim</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Projetos</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
