import React, { Component } from "react";
import Box from "./Box";

export default class BoxList extends Component {
  constructor() {
    super();
    this.state = {
      width: 200,
      height: 200,
      backgroundColor: "red"
    };
  }
  render() {
    const { width, height, backgroundColor } = this.state;
    return (
      <div>
        <Box width={width} height={height} backgroundColor={backgroundColor} />
      </div>
    );
  }
}
