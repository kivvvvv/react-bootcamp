import React, { Component } from "react";
import "./Box.css";

export default class Box extends Component {
  render() {
    return <div className="Box" style={{ background: this.props.color }} />;
  }
}
