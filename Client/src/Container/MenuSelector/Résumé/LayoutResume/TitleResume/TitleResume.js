import React from 'react';
import './TitleResume.css';
import Radium from 'radium';

const TitleResume = (props) => {
    return (
        <div className="TitleResume">
            <h1>{props.title}</h1>
        </div>
    );
};

export default Radium(TitleResume);