import React, { Component } from "react";

class Coin extends Component {
  render() {
    return <img src={this.props.url} />;
  }
}

export default Coin;
