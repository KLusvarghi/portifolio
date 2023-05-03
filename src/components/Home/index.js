import React, { useState } from 'react';
import styles from './Home.module.scss';
import Ilustration from '../../assets/ilustrations.svg';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  const [active, setActive] = useState(false);

  // const [txt, setText] = useState('');
  // const [phase, setPhase] = useState('');
  // useEffect(() => {
  //   const texto = 'Lusvarghi';
  //   const spliText = texto.split('');

  //   spliText.forEach((letter, i) => {
  //     setPhase(phase);
  //     console.log(phase);
  //     setTimeout(() => {
  //       setText(letter);
  //     }, 100 * i);
  //   });
  // }, [phase, txt]);

  return (
    <section className={styles.HomeContainer}>
      <div className={styles.wrapper}>
        <div className={styles.me}>
          <TypeAnimation
            sequence={[
              'Olá, eu sou Kauã Lusvarghi',
              450,
              () => setActive(true),
            ]}
            wrapper="h1"
            cursor={true}
            speed={1}
            className={styles.title}
          />
          {active && (
            <>
              <p className={styles.paragrafo}>Frontend developer</p>
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
            </>
          )}
        </div>
        <div className={styles.ilustration}>
          <img src={Ilustration} alt="Imagem Ilustrativa" />
        </div>
      </div>
      <div className={styles.next}>
        <MdKeyboardDoubleArrowDown size={16} color="#E8EBED" />
      </div>
    </section>
  );
};

export default Home;
