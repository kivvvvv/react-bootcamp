import React, { Component } from "react";
import Dice from "./Dice";
import "./RollDice.css";

class RollDice extends Component {
  static defaultProps = {
    faces: ["one", "two", "three", "four", "five", "six"]
  };
  constructor() {
    super();
    this.state = {
      diceFaces: ["one", "one"],
      rolling: false
    };
    this.roll = this.roll.bind(this);
  }
  roll() {
    const { faces } = this.props;

    this.setState({
      diceFaces: this.state.diceFaces.map(
        () => faces[Math.floor(Math.random() * faces.length)]
      ),
      rolling: true
    });

    const dices = document.querySelectorAll(".Dice");
    dices.forEach(dice => dice.classList.toggle("wobble"));

    setTimeout(() => {
      dices.forEach(dice => dice.classList.toggle("wobble"));
      this.setState({ rolling: false });
    }, 1000);
  }
  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-dices">
          {this.state.diceFaces.map(face => (
            <Dice face={face} />
          ))}
        </div>
        <button
          className="RollDice-button"
          onClick={this.roll}
          disabled={this.state.rolling}
        >
          {this.state.rolling ? "Rolling..." : "Roll Dice!"}
        </button>
      </div>
    );
  }
}

export default RollDice;
