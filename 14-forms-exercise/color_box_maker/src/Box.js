import React, { Component } from "react";

export default class Box extends Component {
  render() {
    const { width, height, backgroundColor } = this.props;

    return <div style={{ width, height, backgroundColor }} />;
  }
}
