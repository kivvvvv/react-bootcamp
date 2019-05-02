import React, { Component } from "react";

class Dice extends Component {
  render() {
    const diceFace = "fas fa-dice-";

    return (
      <div>
        <i className={`${diceFace}${this.props.face}`} />
      </div>
    );
  }
}

export default Dice;
