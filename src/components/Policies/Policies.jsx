import React from 'react';
import { Link } from 'react-router-dom'

import styles from './Policies.module.css';


function Policies() {
    return(


        <body className={styles.container}>
    
            <Link to='/'><h0>Soran Aziz</h0></Link>
            <div className={styles.patternBackground}></div>

            <h1>Privacy Policy and Terms of Use</h1>

            <div class="section" id="privacy-policy">
                <h2 class="section-title">Privacy Policy</h2>
                <div class="section-content">
                    <p>We respect your privacy and are committed to protecting it. This Privacy Policy explains our policies and practices regarding the collection, use, and disclosure of your information when you use our website.</p>
                    <p>We collect information from you when you register on our site, place an order, subscribe to our newsletter, respond to a survey or fill out a form. When ordering or registering on our site, as appropriate, you may be asked to enter your: name, e-mail address, mailing address or phone number.</p>
                    <p>We use this information to personalize your experience, to improve our website, to improve customer service, to process transactions, administer a contest, promotion, survey or other site feature and to send periodic emails.</p>
                </div>
            </div>

            <div class="section" id="terms-of-use">
                <h2 class="section-title">Terms of Use</h2>
                <div class="section-content">
                    <p>By accessing this website, you are agreeing to be bound by these website Terms of Use, all applicable laws, and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
                    <p>If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</p>
                    <p>Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
                    <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time.</p>
                </div>
            </div>

            <div class="footer">
                Copyright © 2024 Soran Aziz. All Rights Reserved | <a href="#top">Back to Top</a>
            </div>

        </body>

    )
}
export default Policies;