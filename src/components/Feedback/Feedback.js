import React, { Component, Fragment } from "react";
import axiosInstance from "../axios";
import { connect } from "react-redux";
import Banner from "../Banner/Banner";

class Feedback extends Component {
  handleChange = (e) => {
    this.props.updateMessage(e.target.value);
  };

  sendEmail = (event) => {
    event.preventDefault();
    if (this.props.message) {
      this.props.updateBannerStatus("neutral");

      if (this.props.message !== "") {
        axiosInstance
          .post("/mail", {
            userEmail: "anoopjadhav@gmail.com",
            userMessage: "Message : " + this.props.message,
          })
          .then((response) => {
            if (response.data.msg === "success") {
              this.props.updateBannerStatus("success");
              this.props.updateMessage("");
            } else if (response.data.msg === "fail") {
              throw new Error("Response Error");
            }
          })
          .catch((err) => {
            this.props.updateBannerStatus("error");
            this.props.updateMessage("");
          });
      }
    } else {
      this.props.updateBannerStatus("");
    }
  };

  resetForm() {
    document.getElementById("contact-form").reset();
  }

  showBanner() {
    let errMessage;
    switch (this.props.messageStatus) {
      case "success":
        errMessage = "Thank you for your feedback";
        break;
      case "error":
        errMessage =
          "Sorry Couldn't send your message. Please try again later.";
        break;
      case "neutral":
        errMessage = "Submitting your feedback...";
        break;
      default:
        errMessage = "";
        break;
    }

    return (
      errMessage !== "" && (
        <Banner
          type={this.props.messageStatus}
          text={errMessage}
          closeBanner={() => this.props.updateBannerStatus("")}
        />
      )
    );
  }
  render() {
    return (
      <Fragment>
        {this.showBanner()}
        <div
          className={
            "show-on-scroll col-md-7 page-1 text-left section feedback " +
            this.props.class
          }
        >
          <div className="section-title grey4 h2 bold">Feedback</div>
          <form
            id="contact-form"
            className="subsection"
            onSubmit={(event) => this.sendEmail(event)}
            method="POST"
          >
            <div className="subsection-data">
              <div className="subsection-title body-text letterspacing-1">
                Please provide a constructive feedback.
              </div>
              <div className="red body-text mt-2">
                <textarea
                  className=""
                  type="type"
                  name="message"
                  value={this.props.message}
                  placeholder={this.props.message}
                  onChange={this.handleChange}
                />
              </div>
              <div className="text-left mt-3">
                <button type="submit">Send</button>
              </div>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.fr.message,
    messageStatus: state.fr.messageStatus,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateMessage: (value) => dispatch({ type: "UPDATE_MESSAGE", data: value }),
    updateBannerStatus: (value) =>
      dispatch({ type: "UPDATE_BANNER", data: value }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
export { Feedback };
