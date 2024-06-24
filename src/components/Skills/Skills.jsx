import React from 'react';
import styles from './Skills.module.css'


function Skills() {
    return(
        <section id='Skills' className={styles.container}>
            <div className={styles.glow1} />
            <img src='/src/assets/coding-image.png' className={styles.mainImage} />
            <h1 className={styles.title}>Transforming Ideas into Reality, One Line at a Time</h1>
            <h2 className={styles.description}>Technologies I've been working with recently</h2>

            <ul className={styles.skillsList}>
                        <li className={styles.skillsItem}>
                            <img src='/src/assets/skills-icons/java-icon.svg' alt='Java' />
                            <p>Java</p>

                        </li>
                        <li className={styles.skillsItem}>
                            <img src='/src/assets/skills-icons/kotlin-icon.svg' alt='Kotlin' />
                            <p>Kotlin</p>
                        </li>
                        <li className={styles.skillsItem}>
                            <img src='/src/assets/skills-icons/python-icon.svg' alt='Python' />
                            <p>Python</p>
                        </li>
                        <li className={styles.skillsItem}>
                            <img src='/src/assets/skills-icons/firebase-icon.svg' alt='Firebase' />
                            <p>Firebase</p>
                        </li>
                        <li className={styles.skillsItem}>
                            <img src='/src/assets/skills-icons/google-cloud-icon.svg' alt='Google Cloud' />
                            <p>Google Cloud</p>
                        </li>
                        <li className={styles.skillsItem}>
                            <img src='/src/assets/skills-icons/figma-icon.svg' alt='Figma' />
                            <p>Figma</p>
                        </li>
                        <li className={styles.skillsItem}>
                            <img src='/src/assets/skills-icons/android-icon.svg' alt='Android SDK' />
                            <p>Android SDK</p>
                        </li>
                        <li className={styles.skillsItem}>
                            <img src='/src/assets/skills-icons/android-studio-icon.svg' alt='Android Studio' />
                            <p>Android Studio</p>
                        </li>
                        <li className={styles.skillsItem}>
                            <img src='/src/assets/skills-icons/react-icon.svg' alt='ReactJS' />
                            <p>ReactJS</p>
                        </li>
                        <li className={styles.skillsItem}>
                            <img src='/src/assets/skills-icons/javascript-icon.svg' alt='Javascript' />
                            <p>Javascript</p>
                        </li>
                        <li className={styles.skillsItem}>
                            <img src='/src/assets/skills-icons/html5-icon.svg' alt='HTML5' />
                            <p>HTML5</p>
                        </li>
                        <li className={styles.skillsItem}>
                            <img src='/src/assets/skills-icons/vsc-icon.svg' alt='Visual Studio Code' />
                            <p>Visual Studio Code</p>
                        </li>
                    </ul>

        </section>
    )
}
export default Skills;