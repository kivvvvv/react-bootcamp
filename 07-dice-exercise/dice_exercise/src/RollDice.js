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
      diceFaces: ["one", "one"]
    };
    this.roll = this.roll.bind(this);
  }
  roll() {
    const { faces } = this.props;

    this.setState({
      diceFaces: this.state.diceFaces.map(
        () => faces[Math.floor(Math.random() * faces.length)]
      )
    });
  }
  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-dices">
          {this.state.diceFaces.map(face => (
            <Dice face={face} />
          ))}
        </div>
        <button onClick={this.roll}>Roll Dice</button>
      </div>
    );
  }
}

export default RollDice;
