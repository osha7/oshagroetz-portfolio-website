import React from 'react';
import Me from './me'

export default function About() {
    return (
        <div className="about-container"> 
            <div className="about">
                <Me />
            </div>
            <div className="osha-about-pic">
                <img src={'https://res.cloudinary.com/djsz02nwd/image/upload/v1700451698/Osha_Chicago_rxsl3h.jpg'} alt="osha" className="img-responsive"/>
            </div>
        </div>
    )
}

