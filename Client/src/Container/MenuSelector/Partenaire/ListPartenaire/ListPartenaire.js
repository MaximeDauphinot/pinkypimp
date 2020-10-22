import React from 'react';
import './ListPartenaire.css';
import Displaypartenaire from './DisplayPartenaire/DisplayPartenaire';

const Listpartenaire = props => {
        return (
            <div className="Listpartenaire">
                <div className="container_Listpartenaire">
                    <Displaypartenaire member={props.partenaire}/>
                </div>    
            </div>
        );
};

export default Listpartenaire;