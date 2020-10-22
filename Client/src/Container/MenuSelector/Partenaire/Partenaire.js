import React from 'react';
import './Partenaire.css';
import ListPartenaire from './ListPartenaire/ListPartenaire.js'

const bdd = {
    leftColumn: [
        {name: '42 MUSIC', desc: 'association musique de 42'},
        {name: 'Dièse AUDIOVISUEL', desc: 'évènementiel & ingénierie'},
        {name: 'ROUGE ROUGE', desc: 'jams, concerts, musique'},
        {name: 'METAPHUMP', desc: 'du métal à la funk'},
    ],
    midColumn: [
        {name: 'Mordor QUEEN', desc: 'pyrotchnie & make-up'},
        {name: 'LU_ART', desc: 'afro-dessin'},
        {name: 'Jungle PATH', desc: 'évènementiel, rock & rap'},
        {name: 'MIFS', desc: 'production audivisuelle'},
    ],
    rightColumn: [
        {name: 'Y-BROS', desc: 'trap entre frères'},
        {name: 'FANFARONS', desc: 'production & identité visuelle'},
        {name: 'OWAZA', desc: 'jams hiphop dans Paris'},
    ]
}

const Partenaire = props => {
    return (
        <div className="partenaire">
            <ListPartenaire partenaire={bdd.leftColumn}/>
            <ListPartenaire partenaire={bdd.midColumn}/>
            <ListPartenaire partenaire={bdd.rightColumn}/>
        </div>
    );
};

export default Partenaire;