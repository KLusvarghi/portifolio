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
          <li>Home</li>
          <li>Sobre mim</li>
          <li>Skills</li>
          <li>Projetos</li>
          <li>Contato</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
