import React from 'react';
import './Navbar.css';

function Navbar() {
    return(
        <nav className='navbar'>
            <div className='navbar-brand'>
                <a href='#'>Soran Aziz</a>
            </div>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <a href='#'>Home</a>
                </li>
                <li className='nav-item'>
                    <a href='#About'>About</a>
                </li>
                <li className='nav-item'>
                    <a href='#Skills'>Skills</a>
                </li>
                <li className='nav-item'>
                    <a href='#Projects'>Projects</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;