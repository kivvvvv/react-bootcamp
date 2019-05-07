import React, { Component } from "react";

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveBox = this.handleRemoveBox.bind(this);
  }
  handleRemoveBox() {
    this.props.removeBox(this.props.uuid);
  }
  render() {
    const { width, height, backgroundColor } = this.props;

    return (
      <div
        style={{ width, height, backgroundColor }}
        onClick={this.handleRemoveBox}
      />
    );
  }
}
