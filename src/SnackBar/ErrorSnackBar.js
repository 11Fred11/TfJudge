import React, { Component } from "react";
import Styles from "./SnackBar.module.css";
import errorIcon from "../images/Error-icon.svg";
import closeIcon from "../images/close-icon.svg";

export class ErrorSnackbar extends Component {
  message = "";
  title = "";

  state = {
    isActive: false
  };

  openSnackBar = (message, title) => {
    this.message = message;
    this.title = title;
    this.setState({ isActive: true });

    /* this.setState({ isActive: true }, () => {
      setTimeout(() => {
        this.setState({ isActive: false });
      }, 3000);
    }); */
  };
  closeSnackBar = () => {
    this.setState({ isActive: false });
  };
  render() {
    const { isActive } = this.state;
    if (isActive) {
      return (
        <div
          className={
            isActive
              ? [Styles.errorSnackbar, Styles.show].join(" ")
              : Styles.errorSnackbar
          }
        >
          <img className={Styles.errorIcon} src={errorIcon} alt="Error icon" />
          <div className={Styles.message}>
            <h1 className={Styles.msgtitle}>{this.title}</h1>
            <p className={Styles.msgBody}>{this.message}</p>
          </div>
          <img
            src={closeIcon}
            alt="Close icon"
            className={Styles.closeButton}
            onClick={this.closeSnackBar}
          />
        </div>
      );
    } else return null;
  }
}
