import React from 'react';
import './Container.css';
import MenuSelector from './MenuSelector/MenuSelector';
import ViewSlider from 'react-view-slider';

const Container = props => {
    const renderView = ({index, key, ref, style, className, active, transitionState}) => (
        <div key={key} ref={ref} style={style} className='container_sd'>
                <div className='menuDisplay'>
                    <MenuSelector id={index}/>
                </div>
        </div>
    )  
    return (
        <div id="container" className="container">
            <div className="styleContainer">
                <ViewSlider
                    renderView={renderView}
                    numViews={5}
                    activeView={props.index}/>
            </div>
        </div>
    );
};

export default Container;