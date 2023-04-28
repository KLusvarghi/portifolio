import React from 'react';
import styles from './skills.module.scss';
import mySkills from './mySkills.json';
import classNames from 'classnames';

const Skills = () => {
  return (
    <section className={styles.skillsContainer}>
      <h1>Minhas skills</h1>
      <p>As tecnologias que estudo e utilizo diariamente</p>
      <div className={styles.skills}>
        {mySkills.map((skill) => (
          <div className={styles.tecnologia}>
            <p>{skill.title}</p>
            <div
              className={classNames({
                [styles.image]: true,
                [styles[`${skill.class}`]]: true,
              })}
            ></div>
            <span className={styles.progressContainer}>
              {' '}
              <span
                className={styles.progress1}
                style={{
                  background: `#${skill.color}`,
                  width: `${skill.size}`
                }}
              ></span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
