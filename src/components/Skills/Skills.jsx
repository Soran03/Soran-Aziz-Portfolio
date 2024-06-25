import React, { useEffect } from 'react';
import styles from './Skills.module.css'

import skillsHeroImage from '/src/assets/coding-image.png'

import javaIcon from '/src/assets/skills-icons/java-icon.svg'
import kotlinIcon from '/src/assets/skills-icons/kotlin-icon.svg'
import pythonIcon from '/src/assets/skills-icons/python-icon.svg'
import firebaseIcon from '/src/assets/skills-icons/firebase-icon.svg'
import googleCloudIcon from '/src/assets/skills-icons/google-cloud-icon.svg'
import figmaIcon from '/src/assets/skills-icons/figma-icon.svg'
import androidIcon from '/src/assets/skills-icons/android-icon.svg'
import androidStudioIcon from '/src/assets/skills-icons/android-studio-icon.svg'
import reactIcon from '/src/assets/skills-icons/react-icon.svg'
import javascriptIcon from '/src/assets/skills-icons/javascript-icon.svg'
import html5Icon from '/src/assets/skills-icons/html5-icon.svg'
import vscIcon from '/src/assets/skills-icons/vsc-icon.svg'




function Skills() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.show);
                } 
                else {
                    entry.target.classList.remove(styles.show);
                }
            });
        });

        const hiddenElements = document.querySelectorAll(`.${styles.hidden}`);
        hiddenElements.forEach((el) => observer.observe(el));

        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
        };
    }, []);


    return(
        <section id='Skills' className={styles.container}>
            <div className={styles.glow1} />
            <img src={skillsHeroImage} className={styles.mainImage} />
            <h1 className={styles.title}>Transforming Ideas into Reality, One Line at a Time</h1>
            <h2 className={styles.description}>Technologies I've been working with recently</h2>

            <ul className={styles.skillsList}>
                        <li className={`${styles.skillsItem} ${styles.hidden}`}>
                            <img src={javaIcon} alt='Java' />
                            <p>Java</p>

                        </li>
                        <li className={`${styles.skillsItem} ${styles.hidden}`}>
                            <img src={kotlinIcon} alt='Kotlin' />
                            <p>Kotlin</p>
                        </li>
                        <li className={`${styles.skillsItem} ${styles.hidden}`}>
                            <img src={pythonIcon} alt='Python' />
                            <p>Python</p>
                        </li>
                        <li className={`${styles.skillsItem} ${styles.hidden}`}>
                            <img src={firebaseIcon} alt='Firebase' />
                            <p>Firebase</p>
                        </li>
                        <li className={`${styles.skillsItem} ${styles.hidden}`}>
                            <img src={googleCloudIcon} alt='Google Cloud' />
                            <p>Google Cloud</p>
                        </li>
                        <li className={`${styles.skillsItem} ${styles.hidden}`}>
                            <img src={figmaIcon} alt='Figma' />
                            <p>Figma</p>
                        </li>
                        <li className={`${styles.skillsItem} ${styles.hidden}`}>
                            <img src={androidIcon} alt='Android SDK' />
                            <p>Android SDK</p>
                        </li>
                        <li className={`${styles.skillsItem} ${styles.hidden}`}>
                            <img src={androidStudioIcon} alt='Android Studio' />
                            <p>Android Studio</p>
                        </li>
                        <li className={`${styles.skillsItem} ${styles.hidden}`}>
                            <img src={reactIcon} alt='ReactJS' />
                            <p>ReactJS</p>
                        </li>
                        <li className={`${styles.skillsItem} ${styles.hidden}`}>
                            <img src={javascriptIcon} alt='Javascript' />
                            <p>Javascript</p>
                        </li>
                        <li className={`${styles.skillsItem} ${styles.hidden}`}>
                            <img src={html5Icon} alt='HTML5' />
                            <p>HTML5</p>
                        </li>
                        <li className={`${styles.skillsItem} ${styles.hidden}`}>
                            <img src={vscIcon} alt='Visual Studio Code' />
                            <p>Visual Studio Code</p>
                        </li>
                    </ul>

        </section>
    )
}
export default Skills;