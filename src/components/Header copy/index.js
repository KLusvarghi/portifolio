import { useRef } from 'react';
import styles from './header.css';

const Header = () => {
  const navRef = useRef();

  const toggleMenu = () => {
    navRef.current.classList.toggle('active');
  };

  return (
    <header className={styles.headerContainer}>
      <a href="a" alt="Página inicial" className={styles.logo}>&lt;KLusvarghi/&gt;</a>
      <nav className={styles.nav} ref={navRef}>
        <button onClick={toggleMenu} className={styles.btnMobile}>
          <span id='hamburger'></span>
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
