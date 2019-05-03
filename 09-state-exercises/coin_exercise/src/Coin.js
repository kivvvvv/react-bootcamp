import React, { Component } from "react";
import "./Coin.css";

class Coin extends Component {
  render() {
    return (
      <div className="Coin">
        <img src={this.props.url} alt="a coin" />
      </div>
    );
  }
}

export default Coin;
