import React from 'react';
import styles from './Contact.module.css';


function Contact() {
    return(
        <section id='Contact' className={styles.container}>
            <h3 className={styles.subtitle}>Get in touch</h3>
            <h1 className={styles.title}>Let's bring your vision to life</h1>

            <div className={styles.container2}>

                <div className={styles.leftColumn}>
                    <div className={styles.contactInfoBox}>
                        <img src='/src/assets/phone-icon.svg' />
                        <p>+44 7488 419875</p>
                    </div>
                    <div className={styles.contactInfoBox}>
                    <img src='/src/assets/mail-icon.svg' />
                    <p>azizsoran01@gmail.com</p>
                    </div>
                    <div className={styles.socialRow}>
                        <a href='https://www.linkedin.com/in/aziz-soran/' >
                            <img src='/src/assets/linkedin-icon.svg' />
                        </a>
                        <a href='https://github.com/Soran03'>
                            <img src='/src/assets/github-icon.svg' />
                        </a>
                    </div>
                </div>

                <div className={styles.rightColumn}>
                    <div className={styles.inputBox}>
                        <input type='text' name='' required='required' />
                        <span>Full Name</span>
                    </div>
                    <div className={styles.inputBox}>
                        <input type='text' name='' required='required' />
                        <span>Email Address</span>
                    </div>
                    <div className={styles.inputBox}>
                        <textarea required='required' />
                        <span>Your Message...</span>
                    </div>
                    <div className={styles.inputBox}>
                        <input type='submit' name='' value='Send' />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;