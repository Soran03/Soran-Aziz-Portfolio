import React from 'react';
import './Hero.css'
import profileImage from '/src/assets/profile-image-circle.png'
import linkedInIcon from '/src/assets/linkedin-icon.svg'
import githubIcon from '/src/assets/github-icon.svg'
import emailIcon from '/src/assets/email-icon.png'



function Hero() {
    return(
        <section className='container'>
            <div className='content'>
                <h2 className='hi-text'>Hey there! I'm</h2>
                <h1 className='title'>Soran Aziz</h1>
                <p className='description'> Eager to take my full-stack development skills to the professional level, delivering 
                    high-quality, innovative solutions. </p>
                <a href='#' className='projects-btn'>Projects</a>
            </div>
            <img className='profile-image' src={profileImage} alt='Profile Image' />
            <div className='social-icons'>
                    <a href='https://www.linkedin.com/in/aziz-soran/'>
                        <img src={linkedInIcon} alt='LinkedIn' />
                    </a>
                    <a href='https://github.com/Soran03'>
                        <img src={githubIcon} alt='GitHub' />
                    </a>
                    <a href='#'>
                        <img src={emailIcon} alt='Email' />
                    </a>
            </div>
            <div className='upArrow'>
                <a href='#'>
                    <img src='/src/assets/circle-up-icon.svg' className='upArrowImage' />

                </a>
            </div>
            <div className='blur1' />
            <div className='blur2' />
            <div className='blur3' />
        </section>
    )
}

export default Hero;



