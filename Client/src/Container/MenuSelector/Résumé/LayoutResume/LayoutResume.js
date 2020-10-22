import React from 'react';
import './LayoutResume.css';
import Radium from 'radium';
import TitleResume from './TitleResume/TitleResume';
import TextResume from './TextResume/TextResume';

const LayoutResume = (props) => {
    return (
        <div className="LayoutResume">
            <TitleResume title={props.title}/>
            <div className="botResume" style={props.reverse === true ? null: {flexDirection: 'row-reverse'}}>
                <div className="alignResume" style={{width: '60%'}}>
                    <TextResume reverse={props.reverse} Text={props.firstText}/>
                    <TextResume reverse={props.reverse} Text={props.secondText}/>
                </div>
                <div className="alignResume" style={{width: '40%'}}>
                    <img src={props.img} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Radium(LayoutResume);