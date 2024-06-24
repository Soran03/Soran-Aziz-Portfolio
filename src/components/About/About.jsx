import React from 'react';
import styles from './About.module.css'
import aboutImage from '/src/assets/full-img1.jpg'


function About() {
    return(
        <section id='About' className={styles.container}>
            <h2 className={styles.title}>About</h2>
            <div className={styles.imageAndText}> 
                <img className={styles.aboutImg} src={aboutImage} alt='About Image'  />
                    <ul className={styles.content}>
                        <li className={styles.listItem}>
                            <img src='/src/assets/university-icon.svg' />
                            <div>
                                <h3>Academic Journey</h3>
                                <p>Having recently graduated with a First Class in Computer Science from the University of Greenswich, I am now eager to transition 
                                    into a professional role in software development. </p>
                            </div>
                        </li>
                        <li className={styles.listItem}>
                            <img src='/src/assets/time-check-icon.svg'/>
                            <div>
                                <h3>Creative Problem Solver</h3>
                                <p>With hands-on experience in mobile app development, backend services, and API integrations, I have developed a keen ability 
                                    to deliver scalable and efficient solutions.</p>
                            </div>
                        </li>
                        <li className={styles.listItem}>
                            <img src='/src/assets/time-check-icon.svg'/>
                            <div>
                                <h3>Technological Enthusiast</h3>
                                <p>Committed to continuous learning and staying updated with the latest tech trends, I am ready to contribute to dynamic teams
                                     and impactful projects.</p>
                            </div>
                        </li>
                    </ul>

            </div>
            {/* <div className={styles.skills}>
                <img src='/src/assets/coding-image.png' className={styles.codingImage}/>
                <h1 className={styles.skillsTitle}>Join me!</h1>
            </div> */}





            {/* <div className={styles.skills}>
                <div className={styles.skillsLeftSection}>
                    <h1 className={styles.selectSkill}>Go on, select a skill!</h1>
                    <img className={styles.selectedSkillImage} src='/src/assets/skills-icons/java-icon.svg' alt='Selected Image' />
                </div>
                <div className={styles.skillsRightSection}>
                    <h3 className={styles.skillsTitle}>Skills</h3>
                    <h3 className={styles.skillsDescription}>Technologies I've been working with recently.</h3>
                    <ul className={styles.skillsList}>
                        <li className={styles.skillsItem}>
                            <img src='/src/assets/skills-icons/java-icon.svg' alt='Java' />
                            <p>Java</p>

                        </li>
                        <li className={styles.skillsItem}>
                            <img src='/src/assets/skills-icons/java-icon.svg' alt='Java' />
                            <p>Java</p>
                        </li>
                        <li className={styles.skillsItem}>
                            <img src='/src/assets/skills-icons/java-icon.svg' alt='Java' />
                            <p>Java</p>
                        </li>
                        <li className={styles.skillsItem}>
                            <img src='/src/assets/skills-icons/java-icon.svg' alt='Java' />
                            <p>Java</p>
                        </li>
                        <li className={styles.skillsItem}>
                            <img src='/src/assets/skills-icons/java-icon.svg' alt='Java' />
                            <p>Java</p>
                        </li>
                        <li className={styles.skillsItem}>
                            <img src='/src/assets/skills-icons/java-icon.svg' alt='Java' />
                            <p>Java</p>
                        </li>
                        <li className={styles.skillsItem}>
                            <img src='/src/assets/skills-icons/java-icon.svg' alt='Java' />
                            <p>Java</p>
                        </li>
                        <li className={styles.skillsItem}>
                            <img src='/src/assets/skills-icons/java-icon.svg' alt='Java' />
                            <p>Java</p>
                        </li>
                        <li className={styles.skillsItem}>
                            <img src='/src/assets/skills-icons/java-icon.svg' alt='Java' />
                            <p>Java</p>
                        </li>
                        <li className={styles.skillsItem}>
                            <img src='/src/assets/skills-icons/java-icon.svg' alt='Java' />
                            <p>Java</p>
                        </li>
                        
                    </ul>
                </div>

                
            </div> */}
            {/* <div className={styles.blur1} />
            <div className={styles.blur2} />
            <div className={styles.blur3} /> */}
        </section>
    )
}
export default About;