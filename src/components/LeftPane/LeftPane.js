import { Component } from 'react';
import './LeftPane.css';

// import { Link } from 'react-router-dom'

function LeftPaneItems(props) {
  var listItems = props.data.leftPaneItems.map((item) =>
    item.label !== 'Work' &&
    // <li key={item.key} className={props.data.currentStep === item.key ? 'bold grey2' : 'grey4'}><Link to='/'>{item.label}</Link></li>
    // :
    <li key={item.key} className={props.data.currentStep === item.key ? 'bold grey1' : 'grey3'}>
      <span href="" onClick={(e) => props.data.changeStep(item.key, e)}>{item.label}</span>
    </li>
  )
  return listItems
}


class LeftPane extends Component {
  componentDidMount() {
    // if (this.state.currentStep == 1 && this.state.fetchFlag) {
    setTimeout(() => {
      var ele = document.getElementsByClassName('summary')
      try {
        if (ele[0])
          ele[0].scrollIntoView()
      } catch (e) {
        console.log(e);
      }

      this.setState(() => {
        return {
          currentStep: 1
        }
      })
    }, 100)

    setTimeout(() => {
      this.props.fetchHeaderPositions();
      //function to fetch all the header positions
    }, 100)

  }

  render() {
    return <div className="left-pane position-fixed  d-none d-md-block">
      {/* {!this.props.darkMode ? 
      <img src={LightLogo} alt="logo" /> : <img src={DarkLogo} alt="logo" />
  } */}
      <ul className="menu body-text grey4">
        {<LeftPaneItems data={this.props} />}
      </ul>

    </div>
  }


}

export default LeftPane;
