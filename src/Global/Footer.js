import React, { Component } from "react";
import "./Footer.css";

export class Footer extends Component {
  dt = new Date();
  render() {
    return (
      <footer>
        Made with love{" "}
        <span role="img" aria-label="Heart emoji">
          ❤️
        </span>{" "}
        by fredjie |{"  "}
        <time>{this.dt.getFullYear()}</time>
      </footer>
    );
  }
}
