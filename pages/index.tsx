import React, { useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Foooter';
import Head from './Helper/Head';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import AnimatedSection from './Helper/AnimatedSection';
import styles from './Home.module.scss';

export default function Home() {
  return (
    // <div  }>
    <main className={styles.homeContainer}>
      <Head title="Home - Portifólio Kauã Ortolani Lusvarghi" />
      <Header />
      <Intro />
      <AboutMe />
      <Projetos />
      <Contato />
      <Footer />
    </main>
  );
}
