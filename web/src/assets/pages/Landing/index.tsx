import React from 'react';
import logoImg from '../../../assets/images/logo.svg';
import landingImg from '../../../assets/images/landing.svg';
import studyIcon from '../../../assets/images/icons/study.svg';
import giveClassesIcon from '../../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../../assets/images/icons/purple-heart.svg';


function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="proffy"/>
                    <h2>Sua plataforma de online.</h2>
                </div>
                <img src={landingImg}
                 alt="plataforma"
                 className="hero-image"/>

                 <div className="buttons-container">
                    <a href="" className="study">
                        <img src={studyIcon} alt="estuda"/>
                        estuda
                    </a>
                    
                    <a href="" className="give-classes">
                        <img src={giveClassesIcon} alt="estuda"/>
                        estuda
                    </a>
                 </div>
                    <span className="total-connections">
                        Total de 200 conexao já realizadas<img src={purpleHeartIcon} alt="coracao roxo"/>
                    </span>
                </div>
             </div>
    )
}
export default Landing;