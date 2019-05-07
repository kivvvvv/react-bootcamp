import React, { Component } from "react";
import NewBoxForm from "./NewBoxForm";
import uuid from "uuid/v4";
import Box from "./Box";

export default class BoxList extends Component {
  constructor() {
    super();
    this.state = {
      boxes: []
    };
    this.addBox = this.addBox.bind(this);
  }
  addBox(properties) {
    const { width, height, backgroundColor } = properties;
    this.setState(state => {
      return {
        boxes: [
          ...state.boxes,
          { width, height, backgroundColor, uuid: uuid() }
        ]
      };
    });
  }
  renderBoxes() {
    const { boxes } = this.state;
    if (boxes.length > 0) {
      return boxes.map(box => (
        <Box
          width={`${box.width}px`}
          height={`${box.height}px`}
          backgroundColor={box.backgroundColor}
        />
      ));
    }
  }
  render() {
    return (
      <section>
        <h1>Box Maker Thingy</h1>
        <NewBoxForm addBox={this.addBox} />
        {this.renderBoxes()}
      </section>
    );
  }
}
