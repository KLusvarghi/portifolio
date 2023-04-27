import React from 'react';
import styles from './Home.module.scss';
import Ilustration from '../../assets/ilustrations.svg';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';

const Home = () => {
  return (
    <section className={styles.HomeContainer}>
      <div className={styles.wrapper}>
        <div className={styles.me}>
          <h1>
            Olá, eu sou <br />
            Kauã Lusvarghi
          </h1>
          <p>Frontend developer</p>
          <div className={styles.buttons}>
            <a
              href="https://www.linkedin.com/in/kaua-ortolani-lusvarghi-422b141b4/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/KLusvarghi"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className={styles.ilustration}>
          <img src={Ilustration} alt="Imagem Ilustrativa" />
        </div>
      </div>
      <div className={styles.next}>
        <MdKeyboardDoubleArrowDown size={16} color='#E8EBED'/>
      </div>
    </section>
  );
};

export default Home;
