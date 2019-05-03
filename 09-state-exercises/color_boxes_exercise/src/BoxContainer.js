import React, { Component } from "react";
import Box from "./Box";
import "./BoxContainer.css";

export default class BoxContainer extends Component {
  static defaultProps = {
    nBox: 16
  };
  render() {
    let boxes = [];
    while (boxes.length < this.props.nBox) {
      boxes.push(<Box />);
    }

    return <div className="BoxContainer">{boxes}</div>;
  }
}
