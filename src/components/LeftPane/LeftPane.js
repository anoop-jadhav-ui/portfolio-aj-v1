import React, { Component } from "react";
import "./LeftPane.css";
import ContactIcons from "../ContactIcons/ContactIcons";

function LeftPaneItems(props) {
  var listItems = props.data.leftPaneItems.map(
    (item) =>
      item.label !== "Work" && (
        <li
          key={item.key}
          className={
            props.data.currentStep === item.key ? "bold grey1" : "grey3"
          }
        >
          <span href="" onClick={(e) => props.data.changeStep(item.key, e)}>
            {item.label}
          </span>
        </li>
      )
  );
  return listItems;
}

class LeftPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftPaneVisible: true,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      var ele = document.getElementsByClassName("summary");
      try {
        if (ele[0]) ele[0].scrollIntoView();
      } catch (e) {
        console.log(e);
      }

      this.setState(() => {
        return {
          currentStep: 1,
        };
      });
    }, 100);

    setTimeout(() => {
      this.props.fetchHeaderPositions();
      //function to fetch all the header positions
    }, 100);
  }
  toggleLeftPane() {
    this.setState({
      leftPaneVisible: !this.state.leftPaneVisible,
    });
  }

  render() {
    return (
      <div
        className={`left-pane position-fixed d-none d-md-block ${
          this.state.leftPaneVisible ? "open" : "closed"
        }`}
      >
        <div className="toggle-button" onClick={this.toggleLeftPane.bind(this)}>
          <div className="arrow"></div>
        </div>
        <ul className="menu body-text grey4">
          {<LeftPaneItems data={this.props} />}
        </ul>
        <ContactIcons data={this.props.dbData} className="inside-leftpane" />
      </div>
    );
  }
}

export default LeftPane;
export { LeftPane };
