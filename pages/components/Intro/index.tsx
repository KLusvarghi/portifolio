import React, { useEffect, useState } from 'react';
import styles from './Intro.module.scss';
import Button from '../Button';
import LinkNext from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import DescriptionIcon from '@mui/icons-material/Description';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TypeAnimation } from 'react-type-animation';
import classNames from 'classnames';
import UseWindowSize from '../../Helper/windowSize';
// import { whatsSize } from '../WindowSize';
import { Link } from 'react-scroll';
import AnimatedSection from '../../Helper/AnimatedSection';

export default function Intro() {
  const [active, setActive] = useState(false);
  const width = UseWindowSize();

  return (
    <AnimatedSection>
      <main id="home" className={styles.introContainer}>
        <div className={styles.wrapper}>
          <div className={styles.wrapperSocial}>
            <div
              className={classNames({
                [styles.social]: true,
                [styles.hideSocial]: width <= 420 ? true : false,
              })}
            >
              <LinkNext
                href="https://github.com/KLusvarghi"
                target="_blank"
                replace
              >
                <GitHubIcon />
              </LinkNext>
              <LinkNext
                href="https://www.linkedin.com/in/kaua-ortolani-lusvarghi-422b141b4/"
                target="_blank"
                replace
              >
                <LinkedInIcon />
              </LinkNext>
              <LinkNext
                href="https://www.instagram.com/lusvarghikaua/"
                target="_blank"
                replace
              >
                <InstagramIcon />
              </LinkNext>
              <LinkNext
                href="https://drive.google.com/file/d/15YoWCl9BiAazKIh6NmqVAz5L0EMGUd0o/view?usp=sharing"
                target="_blank"
                replace
              >
                <DescriptionIcon />
              </LinkNext>
            </div>
          </div>

          <div className={styles.intro}>
            <div className={styles.textMain}>
              <p>E ai, eu me chamo</p>
              <TypeAnimation
                className={styles.typing}
                sequence={['Kauã Lusvarghi', 450, () => setActive(true)]}
                cursor={true}
                speed={10}
              />
            </div>
            {active && (
              <>
                <p className={styles.subTitle}>
                  Um desenvolvedor web iniciante e focado em resultados, que
                  constrói e gerencia sites e aplicativos web visando o
                  resultado geral do produto.
                </p>
                <div className={styles.btns}>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    className={styles.box}
                    duration={500}
                  >
                    Contato
                  </Link>
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={0}
                    className={styles.box}
                    duration={500}
                  >
                    Projetos
                  </Link>

                  {/* <Button
                size={
                  width <= 570 ? 'small' : width <= 1200 ? 'medium' : 'normal'
                }
                >
                Projetos
              </Button> */}
                </div>
              </>
            )}
          </div>
          <div className={styles.scroll}>
            <ExpandMoreIcon className={styles.arrow} />
          </div>
        </div>
      </main>
    </AnimatedSection>
  );
}
