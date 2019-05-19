import React, { Component } from "react";

export default class Joke extends Component {
  constructor(props) {
    super(props);
    this.handleUpvoteJoke = this.handleUpvoteJoke.bind(this);
    this.handleDownvoteJoke = this.handleDownvoteJoke.bind(this);
  }
  handleUpvoteJoke() {
    this.props.upvoteJoke(this.props.jokeId);
  }
  handleDownvoteJoke() {
    this.props.downvoteJoke(this.props.jokeId);
  }
  renderEmoji() {
    const totalVote = this.props.totalVote;
    const emojies = ["Very Bad", "Bad", "Normal", "Good", "Very Good"];
    let selectedEmoji;

    switch (true) {
      case totalVote >= 6:
        selectedEmoji = emojies[4];
        break;
      case totalVote < 6 && totalVote >= 3:
        selectedEmoji = emojies[3];
        break;
      case totalVote < 3 && totalVote >= -2:
        selectedEmoji = emojies[2];
        break;
      case totalVote <= -3 && totalVote >= -5:
        selectedEmoji = emojies[1];
        break;
      case totalVote <= -6:
        selectedEmoji = emojies[0];
        break;
      default:
        selectedEmoji = emojies[0];
        break;
    }

    return <i>{selectedEmoji}</i>;
  }
  render() {
    return (
      <div>
        <button onClick={this.handleUpvoteJoke}>Upvote</button>
        <span>{this.props.totalVote}</span>
        <button onClick={this.handleDownvoteJoke}>Downvote</button>
        <li>{this.props.jokeMsg}</li>
        {this.renderEmoji()}
      </div>
    );
  }
}
