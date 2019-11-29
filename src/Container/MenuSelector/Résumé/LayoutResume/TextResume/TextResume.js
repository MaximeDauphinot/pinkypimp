import React from 'react';
import './TextResume.css';
import Radium from 'radium';

const TextResume = (props) => {
    return (
        <div className="TextResume">
            <p style={props.reverse === true ? null: {margin: '16px 0px 16px 80px'}}>{props.Text}</p>
        </div>
    );
};

export default Radium(TextResume);