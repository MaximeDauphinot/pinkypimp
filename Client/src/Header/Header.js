import React from 'react';
import './Header.css';
import Menu from './Menu/Menu';
import logo from '../ressources/logo-blanc.png';

const bdd = [
    {name: 'Accueil'},
    {name: 'La Team'},
    {name: 'Les Reufs'},
    {name: 'Résumé'},
    {name: 'News'},
]

const Header = props => {
    const style = {
        width: '100%',
        display: 'flex'
    };

    const menu = (
        <div style={style}>
            {bdd.map((divmenu, index) => {
                return <Menu 
                        click={() => props.handler(index)} 
                        name={divmenu.name}
                        key={index} />
            })}
        </div>
    );

    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo" className="adjustLogo"/>
            </div>
            <div className="container_header">
                {menu}
            </div>    
        </div>
    );
};

export default Header;