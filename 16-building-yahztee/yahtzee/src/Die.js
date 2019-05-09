import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    diceFaces: ["one", "two", "three", "four", "five", "six"]
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleClick(this.props.idx);
  }
  render() {
    return (
      <button
        className={"Die"}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={this.handleClick}
      >
        <i
          className={`fas fa-dice-${this.props.diceFaces[this.props.val - 1]}`}
        />
      </button>
    );
  }
}

export default Die;
