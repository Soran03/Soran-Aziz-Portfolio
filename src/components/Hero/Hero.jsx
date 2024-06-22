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
                <h1 className='title'>Soran Aziz</h1>
                <p className='description'>Welcome! I'm Soran Aziz, an aspiring software developer. Explore my portfolio to see how I combine my expertise with passion, creating cutting-edge software solutions to deliver excellence in every project.</p>
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
            </div>
            <img className='profile-image' src={profileImage} alt='Profile Image' />
            <div className='blur1' />
            <div className='blur2' />
            <div className='blur3' />
        </section>
    )
}

export default Hero;