import React from 'react';
import LightLogo from '../../assets/leftpane-logo.svg'
import './LeftPane.css';

function LeftPaneItems(props) {

  var listItems = props.data.leftPaneItems.map((item) =>
    <li key={item.key} className={props.data.currentStep === item.key ? 'bold grey2' : 'grey4'}><a onClick={(e) => props.data.changeStep(item.key, e)}>{item.label}</a></li>
  )
  return listItems

}


const LeftPane = (props) => {

  return <div className="left-pane position-fixed  d-none d-md-block">
    <img src={LightLogo} alt="logo" />
    <ul className="menu body-text grey4">
      {<LeftPaneItems data={props} />}
    </ul>

  </div>

}

export default LeftPane;
