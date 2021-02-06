import React, { Component } from "react";
import "../style.css"
export default class Greeting extends Component {
  render() {
    return (
      <>
        <h3>Hello, Good Morning {this.props.name}</h3>
      </>
    );
  }
}
