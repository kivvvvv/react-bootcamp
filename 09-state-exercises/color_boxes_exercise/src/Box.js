import React, { Component } from "react";
import "./Box.css";

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.handleChangeColor = this.handleChangeColor.bind(this);
  }
  handleChangeColor() {
    const { boxIndex, color } = this.props;
    this.props.changeColor(boxIndex, color);
  }
  render() {
    return (
      <div
        className="Box"
        style={{ background: this.props.color }}
        onClick={this.handleChangeColor}
      />
    );
  }
}
