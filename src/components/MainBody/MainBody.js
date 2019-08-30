import React from 'react';

import './MainBody.css';
import Summary from '../Summary/Summary'
import Education from '../Education/Education'
import posed, { PoseGroup, Transition } from 'react-pose'


const Body = posed.div({
  open: { x: '0' },
  closed: {
    x: '150%',
  transition: {
    default: { ease: 'easeIn', duration: 500 }
  }
}
});


class MainBody extends React.Component {
  state = { isOpen: false };

  componentDidMount() {
    setTimeout(this.toggle, 1000);
  }
  toggle = () => this.setState({ isOpen: !this.state.isOpen });
  render() {
    const { isOpen } = this.state;
    return <Body className="main-body col-md-8" pose={isOpen ? 'open' : 'closed'}>
      <Summary />
      
    </Body>
  }
}
export default MainBody;
