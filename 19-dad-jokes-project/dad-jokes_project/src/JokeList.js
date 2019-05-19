import React, { Component } from "react";
import Joke from "./Joke";

const JOKE_API = "https://icanhazdadjoke.com/";

export default class JokeList extends Component {
  constructor() {
    super();
    this.state = {
      jokes: []
    };
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
  componentDidMount() {
    this.getJokes().then(
      function onFulfilledJokes(jokes) {
        this.setState(state => {
          return {
            jokes: [...state.jokes, ...jokes]
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
            <Joke jokeMsg={joke.joke} />
          ))}
        </ul>
      </div>
    );
  }
}
