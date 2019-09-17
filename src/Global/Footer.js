import React, { Component } from "react";

export class Footer extends Component {
  dt = new Date();
  render() {
    return (
      <footer>
        Made with love by fredjie |{"  "}
        <time>{this.dt.getFullYear()}</time>
      </footer>
    );
  }
}
