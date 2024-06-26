import React from 'react';
import styles from './Contact.module.css';

import phoneIcon from '/src/assets/phone-icon.svg'
import mailIcon from '/src/assets/mail-icon.svg'
import linkedinIcon from '/src/assets/linkedin-icon.svg'
import githubIcon from '/src/assets/github-icon.svg'


function Contact() {
    return(
        <section id='Contact' className={styles.container}>
            <h3 className={styles.subtitle}>Get in touch</h3>
            <h1 className={styles.title}>Let's bring your vision to life</h1>

            <div className={styles.container2}>

                <div className={styles.leftColumn}>
                    <div className={styles.contactInfoBox}>
                        <img src={phoneIcon} />
                        <p>+44 7488 419875</p>
                    </div>
                    <div className={styles.contactInfoBox}>
                    <img src={mailIcon} />
                    <p>azizsoran01@gmail.com</p>
                    </div>
                    <div className={styles.socialRow}>
                        <a href='https://www.linkedin.com/in/aziz-soran/' >
                            <img src={linkedinIcon} />
                        </a>
                        <a href='https://github.com/Soran03'>
                            <img src={githubIcon} />
                        </a>
                    </div>
                </div>

                <div className={styles.rightColumn}>               
                <form action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value="4f024b23-8f97-431f-babf-871be4a44f35" />
                    <div className={styles.inputBox}>
                        <input type='text' name='name' required='required' />
                        <span>Full Name</span>
                    </div>
                    <div className={styles.inputBox}>
                        <input type='email' name='email' required='required' />
                        <span>Email Address</span>
                    </div>
                    <div className={styles.inputBox}>
                        <textarea name='message' required='required' />
                        <span>Your Message...</span>
                    </div>
                    <div className={styles.inputBox}>
                        <input type='submit' value='Send' />
                    </div>
                </form>

                </div>
            </div>
        </section>
    )
}
export default Contact;