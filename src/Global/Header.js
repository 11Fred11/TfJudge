import React, { Component } from "react";
import tfJudgeLogo from "../images/TFJudge-logo.svg";
import "./Header.css";

export class Header extends Component {
  render() {
    return (
      <header>
        <img src={tfJudgeLogo} alt="TFJudge logo"></img>
        <nav>
          <a
            href="https://github.com/10Fred10"
            target="blanc"
            aria-label="Visit the developer's Github Profile"
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 75 75"
              style={{ enableBackground: "new 0 0 75 75" }}
              xmlSpace="preserve"
            >
              <g className="socialIcon">
                <path
                  d="M54,10c0.9,2.1,1.5,5.6,0.6,8.2c3.7,3.1,5,10.8,3.2,17.1c5.3,0.4,11.5-0.2,15.6,1.4
		c-3.8-0.5-8.9-1.4-13.8-1.1c-0.9,0.1-2.3,0-2.2,1.3c5.6,0.4,11.2,0.9,15.9,2.4c-4.6-0.7-10.2-1.9-15.9-2.1
		c-2.4,4.7-7.1,6.9-13.6,7.4c0.7,1.5,2.1,2.1,2.4,4.6c0.5,3.7-0.8,9.1,0.5,11.5c0.6,1.2,1.6,1.2,2.2,2.2c-1.6,1.9-5.6-0.2-6-2.2
		c-0.8-3.4,1.2-8.7-1-11.1c0.1,3.7-0.9,9,0.2,12.3c0.4,1.3,1.6,1.8,1.3,3c-7.5,0.8-4.3-9.6-5.6-15.8c-1.1,0.1-0.6,1.7-0.6,2.4
		c0,6,1.2,14.2-5.2,13.4c-0.2-1.3,0.9-1.7,1.3-2.8c1.2-3.4-0.2-8.4,0.3-12.5c-2.5,1.9,0.3,8.4-1.3,11.7c-0.9,1.9-3.7,2.8-5.9,1.9
		c0.3-1.4,1.8-1.2,2.4-2.5c0.9-1.9,0-4.5,0.3-7.3c-4.6,0.9-8.1-0.1-9.8-3c-0.8-1.3-1-2.8-1.9-3.9c-0.9-1.1-2.4-1.3-2.9-2.8
		c5.7-1.4,5.9,5.8,11,6c1.6,0.1,2.4-0.4,3.8-0.8c0.4-1.8,1.3-3.2,2.5-4.1c-6.3-0.9-11.5-2.8-14-7.6c-5.7,0.3-11,1-15.9,2.2
		c4.4-1.6,9.9-2.2,15.7-2.4c-0.3-2.1-3.4-1.5-5.2-1.4c-3.5,0.2-7.9,0.6-10.6,1.1c4-1.4,9.6-1.3,15.1-1.3c-1.7-5.2-1.1-13.5,2.5-16.6
		c-1-2.6-0.7-6.8,0.6-8.8c4,0.2,6.5,1.9,9,3.6c3.2-0.9,6.5-1.3,10.8-1.1c1.8,0.1,3.7,0.9,5.1,0.8c1.3-0.1,2.8-1.6,4.1-2.2
		C50.6,10.4,52.1,10.1,54,10"
                />
              </g>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/fredhm/"
            target="blanc"
            aria-label="Visit the developer's LinkedIn Profile"
          >
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 75 75"
              style={{ enableBackground: "new 0 0 75 75" }}
              xmlSpace="preserve"
            >
              <g id="XMLID_184_" className="socialIcon">
                <path d="M13.8,29.3H24V62H13.8V29.3z M18.9,13c3.2,0,5.9,2.6,5.9,5.9s-2.6,5.9-5.9,5.9 c-3.3,0-5.9-2.6-5.9-5.9S15.6,13,18.9,13" />
                <path d="M30.3,29.3h9.7v4.5h0.1c1.4-2.6,4.7-5.3,9.6-5.3c10.3,0,12.2,6.8,12.2,15.6V62H51.9 V46.1c0-3.8-0.1-8.7-5.3-8.7c-5.3,0-6.1,4.1-6.1,8.4V62H30.4L30.3,29.3L30.3,29.3z" />
              </g>
            </svg>
          </a>
        </nav>
      </header>
    );
  }
}
