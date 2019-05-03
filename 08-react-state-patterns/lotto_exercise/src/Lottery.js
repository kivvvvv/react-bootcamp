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

    this.genRandomNum = function(maxNum) {
      return Math.floor(Math.random() * maxNum) + 1;
    };

    const nums = [];
    const { numBalls, maxNum } = this.props;
    for (let i = 0; i < numBalls; i++) {
      const randNum = this.genRandomNum(maxNum);
      nums.push(randNum);
    }

    this.state = { nums: nums };

    this.genRandomNums = this.genRandomNums.bind(this);
  }
  genRandomNums() {
    const newNums = this.state.nums.map(() =>
      this.genRandomNum(this.props.maxNum)
    );
    this.setState({ nums: newNums });
  }
  render() {
    return (
      <section>
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map(num => (
            <LotteryBall num={num} />
          ))}
        </div>
        <button onClick={this.genRandomNums}>Generate</button>
      </section>
    );
  }
}

export default Lottery;
