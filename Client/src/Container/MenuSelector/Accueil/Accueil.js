import React from 'react';
import './Accueil.css';
import Radium from 'radium';
import "animate.css/animate.min.css";
import logo from '../../../ressources/logo-blanc.png';
import ScrollAnimation from 'react-animate-on-scroll';

const accueil = () => {
    return (
        <div className="title_logo">
            <ScrollAnimation 
                animateIn="zoomIn"
                duration={2}>
                <img src={logo} alt="logoAccueil" className="logoAccueil"/>
            </ScrollAnimation>
            <ScrollAnimation 
                animateIn="slideInRight"
                duration={2}>
                <div className="TextAccueil">
                    <p> 
                        Créateurs d'évènement privé multi-artistique (à but non lucratif), <br />
                        Satiné de rétro gaming et d'une synergie musicale <br />
                        aux effluves de passions urbaines, <br />
                        regroupé autant que possible pour te transmettre le groove. <br />
                        <br />
                        <span style={{fontWeight: 'bold'}}>Concentre toi putain. On vient de t'expliquer.</span><br />
                        Bon, clique <span>ici</span> au pire
                    </p>
                </div>
            </ScrollAnimation>
        </div>
    );
};

export default Radium(accueil);