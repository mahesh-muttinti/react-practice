import React, { Component } from "react";
import "../style.css";
export default class Greeting extends Component {
  render() {
    return (
      <div class="flex-center">
        <h1>Hello, Good Morning!</h1>
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}
