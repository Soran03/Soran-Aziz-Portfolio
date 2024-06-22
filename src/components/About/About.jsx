import React from 'react';
import styles from './About.module.css'
import aboutImage from '/src/assets/full-img1.jpg'


function About() {
    return(
        <section className={styles.container}>
            <h2 className={styles.title}>About</h2>
            <div className={styles.imageAndText}> 
                <img className={styles.aboutImg} src={aboutImage} alt='About Image'  />
                    <ul className={styles.content}>
                        <li>
                            <img src='/src/assets/university-icon.svg' />
                            <div>
                                <h3>Professional Journey</h3>
                                <p>Having recently graduated with a First Class in Computer Science from the University of Greenswich, I am now eager to transition 
                                    into a professional role in software development. Throughout my personal journey, I've gained practical experience across various 
                                    domains, including
                                     mobile app development, backend services, and API integrations. These experiences have not only fortified my technical skills but
                                      also prepared me to tackle real-world challenges effectively. </p>
                            </div>
                        </li>
                        <li>
                            <img src='/src/assets/time-check-icon.svg'/>
                            <div>
                                <h3>Vision and Impact</h3>
                                <p>I am now excited to apply my knowledge and skills in a professional
                                    setting, contributing to innovative projects and furthering my career in software development.
                                    Looking forward, I am driven to continue exploring new technologies and methodologies to push the boundaries of what’s possible
                                     in software development. My goal is to contribute to projects that have a positive impact, whether it’s enhancing community
                                      engagement, optimising business operations, or improving user experiences.</p>
                            </div>
                        </li>
                    </ul>

            </div>
            <div className={styles.blur1} />
            <div className={styles.blur2} />
            <div className={styles.blur3} />
        </section>
    )
}
export default About;