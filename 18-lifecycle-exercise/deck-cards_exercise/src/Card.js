import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div>
        <img alt={this.props.alt} src={this.props.imgSrc} />
      </div>
    );
  }
}
