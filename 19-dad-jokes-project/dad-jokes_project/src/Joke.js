import React, { Component } from "react";

export default class Joke extends Component {
  render() {
    return (
      <div>
        <li>{this.props.jokeMsg}</li>
      </div>
    );
  }
}
