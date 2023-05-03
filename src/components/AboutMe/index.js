/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useEffect } from 'react';
import styles from './AboutMe.module.scss';
import photo from '../../assets/mePhoto.png';

const AboutMe = () => {
  const projectsRef = useRef();
  const studingsRef = useRef();

  const effect = (efeito, time) => {
    console.log(efeito.current);
    const numero = +efeito.current.getAttribute('data-target');
    const incremento = Math.floor(numero / time);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      efeito.current.innerText = start;
      if (start > numero) {
        efeito.current.innerText = numero;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  };

  useEffect(() => {
    effect(projectsRef, 26);
    effect(studingsRef, 1);
  }, []);


  return (
    <section className={styles.AboutMeContainer}>
      <div className={styles.me}>
        <img src={photo} alt="Foto minha" />
        <div className={styles.myname}>
          <p>Kauã&nbsp;</p>
          <p>Ortolani&nbsp;</p>
          <p>Lusvarghi</p>
        </div>
        <a
          href="https://drive.google.com/file/d/1JqlBJ_Cii_5jY0lX8k220gVkpb9zRn3d/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Open CV on drive
        </a>
      </div>
      <div className={styles.aboutMe}>
        <h1>Sobre mim</h1>
        <p className={styles.location}>Praia Grande, São Paulo</p>
        <p>
          Estou cursando Análise e Desenvolvimento de Sistemas na Fatec Praia
          Grande e possuo experiência em programação focada em front-end,
          incluindo conhecimentos em JavaScript, TypeScript e React. Além disso,
          possuo habilidades na criação de landing page, CRUD e consumo de APIs,
          entre outras competências destacadas em meu currículo. Mantenho-me
          atualizado com as tendências do mercado e novas tecnologias, através
          de diversas certificações em programação e desenvolvimento de
          software. Sou apaixonado por tecnologia e sempre busco aprimorar meus
          conhecimentos para aplicá-los em soluções criativas e inovadoras em
          projetos desafiadores.
        </p>
        <div className={styles.experince}>
          <div className={styles.studing}>
            <p>
              <span className={styles.destaque}>+</span>
              <span
                onMouseLeave={() => effect(studingsRef, 2)}
                className={styles.destaque}
                ref={studingsRef}
                data-target="2"
              ></span>{' '}
              <br />
              Anos <br />
              estudando
            </p>
          </div>
          <div className={styles.projects}>
            <p>
              <span className={styles.destaque}>+</span>
              <span
                onMouseLeave={() => effect(projectsRef, 26)}
                className={styles.destaque}
                ref={projectsRef}
                data-target="26"
              ></span>{' '}
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
