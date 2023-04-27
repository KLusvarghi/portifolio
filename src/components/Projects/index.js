import React from 'react'
import styles from './Projects.module.scss';
import Allprojects from './Allprojects';

const Projects = () => {
  return (
    <section className={styles.projectsContainer}>
      <h1>Projetos</h1>
      <p>Meus trabalhos mais rescentes</p>
      <div className={styles.filter}>
        <button>Todos</button>
        <button>Typescript</button>
        <button>Javascript</button>
        <button>React</button>
      </div>
      <div className={styles.projetos}>
        <Allprojects/>
      </div>
    </section>
  )
}

export default Projects