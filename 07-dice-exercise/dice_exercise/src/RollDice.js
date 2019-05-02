import React, { Component } from "react";
import Dice from "./Dice";

class RollDice extends Component {
  render() {
    return (
      <div>
        <Dice face="one" />
        <Dice face="two" />
      </div>
    );
  }
}

export default RollDice;
