import React, { Component } from "react";

export default class Card extends Component {
  render() {
    console.log(this.props.imgSrc);
    return (
      <div>
        <img src={this.props.imgSrc} />
      </div>
    );
  }
}
