import React from 'react'
import './ToggleButton.css'

const ToggleButton = (props) => {
    function clickHandler(evt){
        props.onClick();
    } 
    return (
        // <input type="radio"/> Toggle 
        <div id={props.value ? 'on' : 'off'} className="ToggleButton" onClick={clickHandler}>
          <div className="bar"></div>
          <div className="circle"></div>
        </div>
    )
}

export default ToggleButton;