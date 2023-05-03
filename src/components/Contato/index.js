import React, { useState } from 'react';
import styles from './Contato.module.scss';
import { HiLocationMarker } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import { RiWhatsappFill } from 'react-icons/ri';
import emailjs from '@emailjs/browser';

const Contato = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);



  function sedEmail(e) {
    e.preventDefault();
    if (name === '' || email === '' || subject === '' || message === '') {
      setError(true);
    } else {
      const templateParams = {
        name: name,
        subject: subject,
        message: message,
        email: email,
      };
      setError(false);
      emailjs
        .send(
          'service_7w8trzb',
          'template_fze75s6',
          templateParams,
          'RogZHWFmgc7vGw9e2',
        )
        .then(
          (response) => {
            console.log(response.text);
            console.log(response.status);
          },
          (error) => {
            console.log(error.text);
          },
        );
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
    }
  }

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
              <p>Praia Grande - SP</p>
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

        <form onSubmit={sedEmail} className={styles.contact}>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.nome}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.email}
          />
          <input
            type="text"
            placeholder="Objetivo"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className={styles.subject}
          />
          <textarea
            style={{ resize: 'none' }}
            name="mensagem"
            cols="30"
            rows="10"
            placeholder="Mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={styles.mensagem}
          ></textarea>
          <button>Enviar mensagem</button>
          {error && <p>Preencha todos os campos</p>}
        </form>
      </div>
    </section>
  );
};

export default Contato;
