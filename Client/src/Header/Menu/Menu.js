import React from 'react';
import './Menu.css';

const menu = props => {
    return (
        <div className="menu" onClick={props.click}>
            <div className="text_menu">
                <p className="btn_menu">{props.name}</p>
            </div>
        </div>
    );
};

export default menu;