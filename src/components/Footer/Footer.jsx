import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Footer.module.css';


function Footer() {
    return(
        <section className={styles.container}>
            <p className={styles.footerText}>Designed and built by Soran Aziz</p>
            <div className={styles.legalRow}>
                <p>Copyright © 2024 Soran Aziz. All Rights Reserved</p>
                <Link to='/policies'>Privacy Policy</Link>
                <Link to='/policies'>Terms of Use</Link>
            </div>
        </section>
    )
}
export default Footer;