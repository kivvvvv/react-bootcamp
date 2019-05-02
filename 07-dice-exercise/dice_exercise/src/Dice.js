import React, { Component } from "react";
import "./Dice.css";

class Dice extends Component {
  render() {
    const diceFace = "fas fa-dice-";

    return (
      <div className="Dice animated">
        <i className={`${diceFace}${this.props.face}`} />
      </div>
    );
  }
}

export default Dice;
