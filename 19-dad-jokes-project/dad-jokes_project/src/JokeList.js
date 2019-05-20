import React, { Component } from "react";
import Joke from "./Joke";

const JOKE_API = "https://icanhazdadjoke.com/";

export default class JokeList extends Component {
  static defaultProps = {
    totalJokes: 10
  };
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      jokes: []
    };
    this.upvoteJoke = this.upvoteJoke.bind(this);
    this.downvoteJoke = this.downvoteJoke.bind(this);
  }
  async getJokeJSON() {
    const response = await fetch(JOKE_API, {
      headers: { Accept: "application/json" }
    });
    return response.json();
  }
  getJokes() {
    return Promise.all(
      Array.from({ length: this.props.totalJokes }).map(this.getJokeJSON)
    );
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
    this.getJokes()
      .then(
        async function onFulfilledJokes(jokes) {
          const oldJokes = [...jokes];
          const uniqueJokeIds = new Set();
          oldJokes.forEach(joke => uniqueJokeIds.add(joke.id));

          while (uniqueJokeIds.size < this.props.totalJokes) {
            const newJoke = await this.getJokeJSON();

            uniqueJokeIds.add(newJoke.id);
            oldJokes.push(newJoke);
          }

          return Array.from(uniqueJokeIds.values()).map(jokeId =>
            oldJokes.find(joke => joke.id === jokeId)
          );
        }.bind(this)
      )
      .then(
        function onFulfilledJokes(jokes) {
          this.setState(state => {
            return {
              jokes: [
                ...state.jokes,
                ...jokes.map(joke => ({ ...joke, totalVote: 0 }))
              ],
              isLoaded: true
            };
          });
        }.bind(this)
      );
  }
  renderJokes() {
    return (
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
    );
  }
  render() {
    return (
      <div>
        {this.state.isLoaded ? this.renderJokes() : <h1>LOADING...</h1>}
      </div>
    );
  }
}
