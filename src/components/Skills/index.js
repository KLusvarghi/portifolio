import React, { useEffect, useRef, useState } from 'react';
import styles from './skills.module.scss';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import mySkills from './mySkills.json';
import classNames from 'classnames';

const Skills = () => {
  const ulRef = useRef();
  const skillRef = useRef();

  const [lisRef, setLisRef] = useState('');
  const [iconsRef, setIconsRef] = useState('');

  useEffect(() => {
    setIconsRef(ulRef.current.querySelectorAll('li'));
    setLisRef(skillRef.current.querySelectorAll('i'));
  }, []);

  const lis = Array.from(lisRef);
  const icons = Array.from(iconsRef);

  let isDragging = false;

  const handleIcons = (scrollVal) => {
    let maxScrollableWidth = ulRef.scrollWidth - ulRef.clientWidth;
    lis[0].parentElement.style.display = scrollVal <= 0 ? 'none' : 'flex';
    lis[1].parentElement.style.display =
      maxScrollableWidth - scrollVal <= 1 ? 'none' : 'flex';
  };

  useEffect(() => {
    lis.map((icon) =>
      icon.addEventListener('click', () => {
        // console.log(icon.id);
        // console.log(ulRef.current.scrollLeft);
        // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
        let scrollWidth = (ulRef.current.scrollLeft +=
          icon.id === 'left' ? -340 : 340);
        handleIcons(scrollWidth);
      }),
    );

    icons.map((tab) =>
      tab.addEventListener('click', () => {
        ulRef.current.querySelector('.active').classList.remove('active');
        console.log(tab);
        tab.classList.add('active');
      }),
    );
  }, [handleIcons, icons, lis]);


  const dragging = (e) => {
    if (!isDragging) return;
    ulRef.current.classList.add('dragging');
    ulRef.current.scrollLeft -= e.movementX;
    handleIcons(ulRef.scrollLeft);
  };

  const dragStop = () => {
    isDragging = false;
    ulRef.current.classList.remove('dragging');
  };

  document.addEventListener('mouseup', dragStop);

  return (
    <section className={styles.skillsContainer}>
      <h1>Minhas skills</h1>
      <p>As tecnologias que estudo e utilizo diariamente</p>
      <div ref={skillRef} className={styles.skills}>
        <div className={styles.icon}>
          <i id="left">
            <IoIosArrowBack size={50} />
          </i>
        </div>

        <ul
          ref={ulRef}
          onMouseDown={() => (isDragging = true)}
          onMouseMove={dragging}
          className={styles.carrosel}
        >
          {mySkills.map((skill, index) => (
            <li key={index} className={styles.card}>
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
                    width: `${skill.size}`,
                  }}
                ></span>
              </span>
            </li>
          ))}
        </ul>

        <div className={styles.icon}>
          <i id="right">
            <IoIosArrowForward size={50} />
          </i>
        </div>
      </div>
    </section>
  );
};

export default Skills;
