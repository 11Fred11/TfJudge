import React, { Component } from "react";

export class Footer extends Component {
  dt = new Date();
  render() {
    return (
      <footer>
        Made with love and passion by Fred |{"  "}
        <time>{this.dt.getFullYear()}</time>
      </footer>
    );
  }
}
