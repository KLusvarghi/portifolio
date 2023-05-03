import React from 'react';
import styles from './Footer.module.scss';
import { FaTelegramPlane } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { VscGithub } from 'react-icons/vsc';
import { MdEmail } from 'react-icons/md';
import { FaFacebookSquare } from 'react-icons/fa';

const Footer = () => {

  const sizeIcon = 35;

  return (
    <section className={styles.footerContainer}>
      <div className={styles.social}>
        <span className={styles.icon}>
          <MdEmail size={sizeIcon} />
        </span>
        <span className={styles.icon}>
          <AiFillLinkedin size={sizeIcon} />
        </span>
        <span className={styles.icon}>
          <VscGithub size={sizeIcon} />
        </span>
        <span className={styles.icon}>
          <FaFacebookSquare size={sizeIcon} />
        </span>
        <span className={styles.icon}>
          <AiFillInstagram size={sizeIcon} />
        </span>
        <span className={styles.icon}>
          <FaTelegramPlane size={sizeIcon} />
        </span>
      </div>
      <p>Alguns direitos reservados ©</p>
    </section>
  );
};

export default Footer;
