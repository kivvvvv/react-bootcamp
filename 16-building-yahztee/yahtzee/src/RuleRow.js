import React, { Component } from "react";
import "./RuleRow.css";

class RuleRow extends Component {
  render() {
    const { doScore, name, score } = this.props;
    if (score === undefined) {
      return (
        <tr className="RuleRow RuleRow-active" onClick={doScore}>
          <td className="RuleRow-name">{name}</td>
          <td className="RuleRow-score">{score}</td>
        </tr>
      );
    }
    return (
      <tr className="RuleRow RuleRow-disabled">
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{score}</td>
      </tr>
    );
  }
}

export default RuleRow;
