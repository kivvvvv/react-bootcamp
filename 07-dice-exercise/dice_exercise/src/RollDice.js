import React, { Component } from "react";
import Dice from "./Dice";
import "./RollDice.css";

class RollDice extends Component {
  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-dices">
          <Dice face="one" />
          <Dice face="two" />
        </div>
      </div>
    );
  }
}

export default RollDice;
