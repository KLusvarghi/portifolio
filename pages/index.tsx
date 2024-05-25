import React from 'react';
import styles from './Main.module.scss';
import Header from './components/Header';
import Footer from './components/Foooter';
import Head from './infra/components/Head';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe/indes';

export default function Home() {
  return (
    // <div style={{background: 'black'} }>
    <div>
      <Head title="Home - Portifólio Kauã Ortolani Lusvarghi" />
      <Header />
      <Intro/>
      <AboutMe/>
      <main>Hellow</main>
      <Footer />
    </div>
  );
}
