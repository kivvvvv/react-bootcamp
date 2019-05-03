import React, { Component } from "react";
import LotteryBall from "./LotteryBall";

class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    numBalls: 6,
    maxNum: 40
  };

  constructor(props) {
    super(props);

    const nums = [];
    const maxNum = this.props.maxNum;
    for (let i = 0; i < this.props.numBalls; i++) {
      const randNum = Math.floor(Math.random() * maxNum) + 1;
      nums.push(randNum);
    }
    this.state = { nums: nums };
    this.genRandomNums = this.genRandomNums.bind(this);
  }
  genRandomNums() {
    const newNums = this.state.nums.map(
      () => Math.floor(Math.random() * this.props.maxNum) + 1
    );
    this.setState({ nums: newNums });
  }
  render() {
    return (
      <div>
        <div>
          {this.state.nums.map(num => (
            <LotteryBall num={num} />
          ))}
        </div>
        <button onClick={this.genRandomNums}>Generate</button>
      </div>
    );
  }
}

export default Lottery;
