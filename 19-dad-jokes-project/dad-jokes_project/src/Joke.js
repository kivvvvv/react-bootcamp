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
  render() {
    return (
      <div>
        <button onClick={this.handleUpvoteJoke}>Upvote</button>
        <span>{this.props.totalVote}</span>
        <button onClick={this.handleDownvoteJoke}>Downvote</button>
        <li>{this.props.jokeMsg}</li>
      </div>
    );
  }
}
