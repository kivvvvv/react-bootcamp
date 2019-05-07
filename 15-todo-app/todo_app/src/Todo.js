import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    return (
      <div>
        <p>{this.props.text}</p>
      </div>
    );
  }
}
