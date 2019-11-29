import React, { useReducer, useEffect } from 'react';
import './MenuSelector.css';
import Accueil from './Accueil/Accueil';
import Membre from './Membre/Membre';
import Partenaire from './Partenaire/Partenaire';
import Resume from './Résumé/Résumé'
import News from './News/News';

let classNameContainer = null;

const menuReducer = (prevState, action) => {
    classNameContainer = 'numero' + action.type
    switch (action.type) {
        case 0:
            return (<Accueil/>);
        case 1:
            return (<Membre/>);
        case 2:
            return (<Partenaire/>)
        case 3:
            return (<Resume/>)
        case 4:
            return (<News/>)
        default:
            throw new Error('Something goes wrong !')
    }    
}

const menuSelector = props => {
    const [menuSelected, dispatchMenuSelected] = useReducer(menuReducer, []);

    useEffect(() => {
        dispatchMenuSelected({type: props.id})
    }, [])

    return (
        <div className={classNameContainer}>
            {menuSelected}
        </div>
    );
};

export default menuSelector;