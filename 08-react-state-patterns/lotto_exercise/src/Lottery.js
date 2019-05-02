import React, { Component } from "react";
import LotteryBall from "./LotteryBall";

class Lottery extends Component {
  render() {
    return (
      <div>
        <LotteryBall num={5} />
        <LotteryBall num={5} />
        <LotteryBall num={5} />
        <LotteryBall num={5} />
        <LotteryBall num={5} />
      </div>
    );
  }
}

export default Lottery;
