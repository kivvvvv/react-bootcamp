import React, { Component } from "react";
import Coin from "./Coin";
class CoinContainer extends Component {
  static defaultProps = {
    head: "https://tinyurl.com/react-coin-heads-jpg",
    tail: "https://tinyurl.com/react-coin-tails-jpg"
  };
  constructor() {
    super();
    this.state = {
      flips: 0,
      heads: 0,
      tails: 0
    };
  }
  render() {
    return (
      <section>
        <h1>Let's flip a coin!</h1>
        <Coin url={this.props.head} />
        <button>FLIP MEEE</button>
        <p>
          Out of {this.state.flips} flips, there have been {this.state.heads}
          heads and {this.state.tails} tails.
        </p>
      </section>
    );
  }
}

export default CoinContainer;
