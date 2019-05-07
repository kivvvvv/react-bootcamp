import React, { Component } from "react";
import NewBoxForm from "./NewBoxForm";
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
      <section>
        <h1>Box Maker Thingy</h1>
        <NewBoxForm />
        <Box width={width} height={height} backgroundColor={backgroundColor} />
      </section>
    );
  }
}
