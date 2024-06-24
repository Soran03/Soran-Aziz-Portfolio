import React from 'react';
import styles from './Footer.module.css';


function Footer() {
    return(
        <section className={styles.container}>
            <p className={styles.footerText}>Designed and built by Soran Aziz</p>
            <div className={styles.legalRow}>
                <p>Copyright © 2024 Soran Aziz. All Rights Reserved</p>
                <a href='#'>Privacy Policy</a>
                <a href='#'>Terms of Use</a>
            </div>
        </section>
    )
}
export default Footer;