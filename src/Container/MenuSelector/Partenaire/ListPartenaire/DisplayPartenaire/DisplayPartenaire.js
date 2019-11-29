import React from 'react';
import './DisplayPartenaire.css';
import Radium from 'radium';

const DisplayPartenaire = props => {
    let partenaire = null 

    if (props.member){
        partenaire = (
            <div>
                {props.member.map((team, index)=> {
                    return (
                        <div className="testPartenaire" key={Math.random()}>
                            <p style={{fontWeight: 'bold',}}>{team.name}</p>
                            <p style={{fontWeight: '100',}}>{team.desc}</p>
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <div className="DisplayPartenaire">
            {partenaire}
        </div>
    );
};

export default Radium(DisplayPartenaire);