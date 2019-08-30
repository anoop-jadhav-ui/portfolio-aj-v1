import React from 'react';
import LightLogo from '../../assets/leftpane-logo.svg'
import './LeftPane.css';
import posed, { PoseGroup } from 'react-pose'

const Sidebar = posed.ul({
  open: { x: '0%' },
  closed: { x: '-100%' }
});

const Item = posed.li({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
});

class LeftPane extends React.Component {
  state = { isOpen: false };

  componentDidMount() {
    setTimeout(this.toggle, 1000);
  }
  toggle = () => this.setState({ isOpen: !this.state.isOpen });
  render() {
    const { isOpen } = this.state;
    return <Sidebar className="left-pane  col-md-4" pose={isOpen ? 'open' : 'closed'}>
      <img src={LightLogo} alt="logo" />
      <ul class="menu body-text grey4">
        <Item class="bold grey2"><a class="grey2" href="javascript:void(0)">Work</a></Item>
        <Item><a class="grey4" href="javascript:void(0)">Summary</a></Item>
        <Item><a class="grey4" href="javascript:void(0)">Education</a></Item>
        <Item><a class="grey4" href="javascript:void(0)">Certifications</a></Item>
        <Item><a class="grey4" href="javascript:void(0)">Skills</a></Item>
        <Item><a class="grey4" href="javascript:void(0)">Hobbies & Interests</a></Item>
        <Item><a class="grey4" href="javascript:void(0)">Location</a></Item>
        <Item><a class="grey4" href="javascript:void(0)">Contact</a></Item>
      </ul>
    </Sidebar>

  }
}

export default LeftPane;
