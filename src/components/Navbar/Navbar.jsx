import React, { useState } from 'react';
import styles from './Navbar.module.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return(
        <nav className={styles.navbar}>
            <div className={styles.navbarBrand}>
                <a href='#'>Soran Aziz</a>
            </div>
            <div className={styles.navbarMenu}>

                <img src={
                    menuOpen
                    ? '/src/assets/close-icon.svg' 
                    : '/src/assets/menu-icon.svg'}
                className={styles.menuIcon} 
                alt='Menu Button'
                onClick={() => setMenuOpen(!menuOpen)}/>

                <ul className={`${styles.navbarNav} ${menuOpen ? styles.menuOpen : ''}`}
                    onClick={() => setMenuOpen(false)}>
                    <li className={styles.navItem}>
                        <a href='#About'>About</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href='#Skills'>Skills</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href='#Projects'>Projects</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href='#Contact'>Contact</a>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar;