import React, { Component } from "react";

class Clicker extends Component {
  constructor() {
    super();
    this.state = {
      click: 1
    };
    this.randomNumber = this.randomNumber.bind(this);
  }
  randomNumber() {
    const numx = Math.floor(Math.random() * 10) + 1;
    this.setState({
      click: numx
    });

    if (numx === 7) {
      const msgEl = document.createElement("h1");
      msgEl.textContent = "YOU WIN!";
      document.querySelector(".Clicker").appendChild(msgEl);
      document.querySelector("button").style.display = "none";
    }
  }
  render() {
    return (
      <div class="Clicker">
        <h1>Number is {this.state.click}</h1>
        <button onClick={this.randomNumber}>Random Number</button>
      </div>
    );
  }
}

export default Clicker;
