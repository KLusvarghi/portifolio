/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useLayoutEffect } from 'react';
import styles from './AboutMe.module.scss';
import photo from '../../assets/mePhoto.png';

const AboutMe = () => {
  const numRef = useRef();

  useLayoutEffect(() => {
    const numero = +numRef.current.getAttribute('dataTarget');
    const incremento = Math.floor(numero / 26); 
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numRef.current.innerText = start; 
      if (start > numero) {
        numRef.current.innerText = numero; 
        clearInterval(timer); 
      }
    }, 25 * Math.random()); 
  });

  return (
    <section className={styles.AboutMeContainer}>
      <div className={styles.me}>
        <img src={photo} alt="Foto de Kuaã Ortolani Lusvarghi" />
        <div className={styles.myname}>
          <p>Kauã&nbsp;</p>
          <p>Ortolani&nbsp;</p>
          <p>Lusvarghi</p>
        </div>
        <a href="#">Open CV on drive</a>
      </div>
      <div className={styles.aboutMe}>
        <h1>Sobre mim</h1>
        <p className={styles.location}>Praia Grande, São Paulo</p>
        <p>
          Estou cursando Análise e Desenvolvimento de Sistemas na Fatec Praia
          Grande e possuo experiência em programação focada em front-end,
          incluindo conhecimentos em JavaScript, TypeScript e React. Além disso,
          possuo habilidades na criação de landing page, CRUD e consumo de APIs,
          entre outras competências destacadas em meu currículo.
        </p>
        <div className={styles.experince}>
          <div className={styles.studing}>
            <p>
              <span className={styles.destaque}>2+</span> <br />
              Anos <br />
              estudando
            </p>
          </div>
          <div className={styles.projects}>
            <p>
              <span className={styles.destaque} ref={numRef} dataTarget="26">
                +
              </span>{' '}
              <br />
              Projetos no <br />
              GitHub
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
