import React from 'react';
import styles from './Contato.module.scss';
import { HiLocationMarker } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import { RiWhatsappFill } from 'react-icons/ri';

const Contato = () => {
  return (
    <section className={styles.contatoContainer}>
      <h1>Contate-me</h1>
      <p>Entrar em contato</p>
      <div className={styles.informatios}>
        <div className={styles.info}>
          <div className={styles.wrapper}>
            <HiLocationMarker size={38} color="#093B5A" />
            <div>
              <h3>Localização</h3>
              <p>Praia Grande - Litoral Sul - SP</p>
            </div>
          </div>

          <div className={styles.wrapper}>
            <MdEmail size={38} color="#093B5A" />
            <div>
              <h3>Email</h3>
              <p>kauaolusvarghi@gmail.com</p>
            </div>
          </div>

          <div className={styles.wrapper}>
            <RiWhatsappFill size={38} color="#093B5A" />
            <div>
              <h3>Telefone / whatsapp</h3>
              <p>+55 1399606-8207</p>
            </div>
          </div>
        </div>

        <form className={styles.contact}>
          <input type="text" placeholder='Nome' className={styles.nome}/>
          <input type="email" placeholder='Email' className={styles.email}/>
          <input type="text" placeholder='Objetivo' className={styles.subject}/>
          <textarea style={{resize: 'none'}} name="mensagem" cols="30" rows="10" placeholder='Mensagem' className={styles.mensagem}></textarea>
          <button>Enviar mensagem</button>
        </form>
      </div>
    </section>
  );
};

export default Contato;
