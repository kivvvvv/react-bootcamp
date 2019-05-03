import React, { Component } from "react";
import Coin from "./Coin";

class CoinContainer extends Component {
  static defaultProps = {
    head:
      "https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg",
    tail: "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg"
  };
  constructor() {
    super();
    this.state = {
      flips: 0,
      heads: 0,
      tails: 0,
      coinFace: ""
    };
    this.flipCoin = this.flipCoin.bind(this);
  }
  flipCoin() {
    const randNum = Math.round(Math.random());
    const coinFaces = Object.keys(this.props);
    const randFaces = coinFaces[randNum];

    this.setState(state => {
      return {
        flips: state.flips + 1,
        heads: randFaces === "head" ? state.heads + 1 : state.heads,
        tails: randFaces === "tail" ? state.tails + 1 : state.tails,
        coinFace: randFaces
      };
    });
  }
  render() {
    const { flips, heads, tails, coinFace } = this.state;
    return (
      <section>
        <h1>Let's flip a coin!</h1>
        {flips === 0 ? null : <Coin url={this.props[coinFace]} />}
        <button onClick={this.flipCoin}>FLIP MEEE</button>
        <p>
          Out of {flips} flips, there have been {heads} heads and {tails} tails.
        </p>
      </section>
    );
  }
}

export default CoinContainer;
