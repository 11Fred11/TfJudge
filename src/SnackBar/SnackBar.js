import React, { PureComponent } from "react";
import Styles from "./SnackBar.module.css";
import errorIcon from "../images/delete-bin-50.png";

export class Snackbar extends PureComponent {
  message = "";

  state = {
    isActive: false
  };

  openSnackBar = (
    message = "We could not find the player Fredjie in region EUW,<br/> make sure you have played your placement matches !"
  ) => {
    this.message = message;
    this.setState({ isActive: true }, () => {
      setTimeout(() => {
        this.setState({ isActive: false });
      }, 5000);
    });
  };

  render() {
    const { isActive } = this.state;
    return (
      <div
        className={
          isActive ? [Styles.snackbar, Styles.show].join(" ") : Styles.snackbar
        }
      >
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 200 200"
          style={{ enableBackground: "new 0 0 200 200" }}
          xmlSpace="preserve"
        >
          <g>
            <polygon
              style={{ fill: "#202B43" }}
              points="190.3,161.8 179.5,161.8 175.8,170.3 106.5,170.3 100.8,164.3 93,174.8 100.7,183 
		183.3,183 186.2,174.8 194.7,174.8 	"
            />
            <polygon
              style={{ fill: "#202B43" }}
              points="106.3,165.3 124.3,165.3 99.8,135.3 79.3,166.8 24.2,166.8 20.5,158.5 9.7,158.3 5.3,171.3 
		13.8,171.3 16.7,179.5 85.7,179.5 100,157.6 	"
            />
            <polygon
              style={{ fill: "#202B43" }}
              points="27.3,158.8 42.5,158.8 34.7,136.5 26.3,136.5 61.5,30.1 98.3,30.3 100,30.3 101.7,30.3 
		138.5,30.1 174.8,140 166.5,140 158.5,162.3 173.8,162.3 176.8,154 193,154 147.8,17 104,17 100,23 95.8,17 52.2,17 8,150.6 
		24.3,150.6 	"
            />
            <polygon
              style={{ fill: "#202B43" }}
              points="120.5,66 100,86.5 79.5,66 70,75.5 90.5,96 70,116.5 79.5,126 100,105.5 120.5,126 
		130,116.5 109.5,96 130,75.5 	"
            />
          </g>
        </svg>
        <div className={Styles.message}>
          <h1 className={Styles.msgtitle}>OOPS, PLAYER NOT FOUND !</h1>
          <p className={Styles.msgBody}>{this.message}</p>
        </div>
      </div>
    );
  }
}

/* 
import React, { PureComponent } from "react";
import Styles from "./SnackBar.module.css";
import errorIcon from "../images/delete-bin-50.png";

export class Snackbar extends PureComponent {
  message = "";

  state = {
    isActive: false
  };

  openSnackBar = (message = "Something went wrong...") => {
    this.message = message;
    this.setState({ isActive: true }, () => {
      setTimeout(() => {
        this.setState({ isActive: false });
      }, 3000);
    });
  };

  render() {
    const { isActive } = this.state;
    return (
      <div
        className={
          isActive ? [Styles.snackbar, Styles.show].join(" ") : Styles.snackbar
        }
      >
        <div class="snackbar">
          <svg src={errorIcon} alt="Error icon"></svg>
          <div class="message">
            <h1 class="msgtitle">OOPS, PLAYER NOT FOUND !</h1>
            <p class="msgBody">{this.message}</p>
          </div>
        </div>
      </div>
    );
  }
} */
