import React, { useState, useEffect } from 'react';
import './Hero.css'
import profileImage from '/src/assets/profile-image-circle.png'
import linkedInIcon from '/src/assets/linkedin-icon.svg'
import githubIcon from '/src/assets/github-icon.svg'
import emailIcon from '/src/assets/email-icon.png'
import upIcon from '/src/assets/circle-up-icon.svg'



function Hero() {
    const [showUpArrow, setShowUpArrow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) { // Show the arrow after scrolling down 200px
                setShowUpArrow(true);
            } else {
                setShowUpArrow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <section className='container'>
            <div className='social-icons'>
                    <a href='https://www.linkedin.com/in/aziz-soran/' target='_blank'>
                        <img src={linkedInIcon} alt='LinkedIn' />
                    </a>
                    <a href='https://github.com/Soran03' target='_blank'>
                        <img src={githubIcon} alt='GitHub' />
                    </a>
                    <a href='#Contact'>
                        <img src={emailIcon} alt='Email' />
                    </a>
            </div>
            <div className='content'>
                <h2 className='hi-text'>Hey there! I'm</h2>
                <h1 className='title'>Soran Aziz</h1>
                <p className='description'> Eager to take my full-stack development skills to the professional level, delivering 
                    high-quality, innovative solutions. </p>
                <a href='#Projects' className='projects-btn'>See my work</a>
            </div>
            <img className='profile-image' src={profileImage} alt='Profile Image' />

            <div className={`upArrow ${showUpArrow ? 'visible' : 'hidden'}`}>
                <a href='#'>
                    <img src={upIcon} className='upArrowImage' />

                </a>
            </div>
            <div className='blur1' />

        </section>
    )
}

export default Hero;



