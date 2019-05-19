import React, { Component } from "react";
import Joke from "./Joke";

const JOKE_API = "https://icanhazdadjoke.com/";

export default class JokeList extends Component {
  constructor() {
    super();
    this.state = {
      jokes: []
    };
    this.upvoteJoke = this.upvoteJoke.bind(this);
    this.downvoteJoke = this.downvoteJoke.bind(this);
  }
  getJokeJSON() {
    return fetch(JOKE_API, { headers: { Accept: "application/json" } }).then(
      function onFulfilled(response) {
        return response.json();
      }
    );
  }
  getJokes() {
    const iJoke = 10;

    return Promise.all(Array.from({ length: iJoke }).map(this.getJokeJSON));
  }
  upvoteJoke(id) {
    this.setState(state => {
      const currentJoke = state.jokes.find(joke => joke.id === id);
      if (currentJoke) currentJoke.totalVote++;
      return state;
    });
  }
  downvoteJoke(id) {
    this.setState(state => {
      const currentJoke = state.jokes.find(joke => joke.id === id);
      if (currentJoke) currentJoke.totalVote--;
      return state;
    });
  }
  componentDidMount() {
    this.getJokes().then(
      function onFulfilledJokes(jokes) {
        this.setState(state => {
          return {
            jokes: [
              ...state.jokes,
              ...jokes.map(joke => ({ ...joke, totalVote: 0 }))
            ]
          };
        });
      }.bind(this)
    );
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.jokes.map(joke => (
            <Joke
              key={joke.id}
              jokeId={joke.id}
              totalVote={joke.totalVote}
              jokeMsg={joke.joke}
              upvoteJoke={this.upvoteJoke}
              downvoteJoke={this.downvoteJoke}
            />
          ))}
        </ul>
      </div>
    );
  }
}
