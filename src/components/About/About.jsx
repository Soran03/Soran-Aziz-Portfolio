import React, { useEffect } from 'react';
import styles from './About.module.css'
import aboutImage from '/src/assets/full-img1.jpg'


function About() {
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
        <section id='About' className={styles.container}>
            <div className={styles.patternBackground}></div>
            <h2 className={styles.title}>About</h2>
            <div className={styles.imageAndText}> 
                <img className={styles.aboutImg} src={aboutImage} alt='About Image'  />
                    <ul className={styles.content}>
                        <li className={`${styles.listItem} ${styles.hidden}`}>
                            <img src='/src/assets/university-icon.svg' />
                            <div>
                                <h3>Academic Journey</h3>
                                <p>Having recently graduated with a First Class Bachelors in Computer Science from the University of Greenswich, I am now eager to transition 
                                    into a professional role in software development. </p>
                            </div>
                        </li>
                        <li className={`${styles.listItem} ${styles.hidden}`}>
                            <img src='/src/assets/calculator-icon.svg'/>
                            <div>
                                <h3>Creative Problem Solver</h3>
                                <p>With hands-on experience in mobile app development, backend services, API integrations, and now web development, I have developed a keen ability 
                                    to deliver scalable and efficient solutions.</p>
                            </div>
                        </li>
                        <li className={`${styles.listItem} ${styles.hidden}`}>
                            <img src='/src/assets/devices-icon.svg'/>
                            <div>
                                <h3>Technological Enthusiast</h3>
                                <p>Committed to continuous learning and staying updated with the latest tech trends, I am ready to contribute to dynamic teams
                                     and impactful projects.</p>
                            </div>
                        </li>
                    </ul>

            </div>
        </section>
    )
}
export default About;