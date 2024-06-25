import React, { useEffect } from 'react';
import styles from './Projects.module.css';

import isoconnectImage from "/src/assets/isoconnect-hero-image.png"
import flexidriveImage from "/src/assets/flexidrive-hero-image.png"
import portfolioImage from "/src/assets/portfolio-hero-image.png"


function Projects() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.show);
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
        <section id='Projects' className={styles.container}>
            <div className={styles.backgroundPattern}></div>
            <h1 className={styles.title}>Projects</h1>

            <ul className={styles.projectsList}>
                <li className={styles.leftColumn}>
                    <img className={styles.hidden} src={isoconnectImage} alt="ISOConnect" />
                    <div className={styles.projectContent}>
                        <h2 className={styles.isoconnectHeading}>ISOConnect</h2>
                        <p className={styles.projectDescription}>The full-stack Android application designed to enhance communication
                             and collaboration 
                            among members of Islamic societies across universities.
                        </p>
                        <ul className={styles.projectTags}>
                            <li>Kotlin</li>
                            <li>XML</li>
                            <li>Android SDK</li>
                            <li>Firebase</li>
                            <li>Google Cloud</li>
                        </ul>
                        <a href='https://github.com/Soran03/ISOConnect' target="_blank" className={styles.isoconnectViewCodeBtn}>View Code</a>
                    </div>
                </li>
                <li className={styles.rightColumn}>
                    <img className={styles.hidden}  src={flexidriveImage} alt="FlexiDrive" />
                    <div className={styles.projectContent}>
                        <h2 className={styles.flexidriveHeading}>FlexiDrive</h2>
                        <p className={styles.projectDescription}>This is a full-stack Android application designed to streamline 
                            the process of renting and managing cars, developed with clean MVVM architecture.
                        </p>
                        <ul className={styles.projectTags}>
                            <li>Kotlin</li>
                            <li>MVVM</li>
                            <li>XML</li>
                            <li>Android SDK</li>
                            <li>Firebase</li>
                            <li>Google Cloud</li>
                        </ul>
                        <a href='https://github.com/Soran03/FlexiDrive' target="_blank" className={styles.flexidriveViewCodeBtn}>View Code</a>
                    </div>
                </li>
                <li className={styles.leftColumn}>
                    <img className={styles.hidden}  src={portfolioImage} alt="Potfolio" />
                    <div className={styles.projectContent}>
                        <h2 className={styles.portfolioHeading}>My Portfolio</h2>
                        <p className={styles.projectDescription}>A showcase of myself, and my software development projects, highlighting
                             my skills in creating efficient and visually appealing solutions.
                        </p>
                        <ul className={styles.projectTags}>
                            <li>ReactJS</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>UI Design</li>
                        </ul>
                        <a href='https://github.com/Soran03/Soran-Aziz-Portfolio' target="_blank" className={styles.portfolioViewCodeBtn}>View Code</a>
                    </div>
                </li>
            </ul>
        </section>
    )
}
export default Projects;