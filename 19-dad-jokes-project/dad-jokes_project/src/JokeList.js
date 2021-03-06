import React, { Component } from "react";
import Joke from "./Joke";

const JOKE_API = "https://icanhazdadjoke.com/";

export default class JokeList extends Component {
  static defaultProps = {
    nJoke: 10
  };
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      jokes: []
    };
    this.upvoteJoke = this.upvoteJoke.bind(this);
    this.downvoteJoke = this.downvoteJoke.bind(this);
    this.addJokes = this.addJokes.bind(this);
  }
  addJokes() {
    this.setState({ isLoaded: false }, () => {
      Promise.resolve(this.getJokes())
        .then(
          async function onFulfilledNewJokes(newJokes) {
            const uniqueJokes = await this.getUniqueJokes([
              ...this.state.jokes,
              ...newJokes
            ]);
            return uniqueJokes;
          }.bind(this)
        )
        .then(
          function onFulfilledUniqueJokes(uniqueJokes) {
            this.setState({
              jokes: [
                ...uniqueJokes.map(joke => ({
                  ...joke,
                  totalVote: joke.totalVote ? joke.totalVote : 0
                }))
              ],
              isLoaded: true
            });

            localStorage.setItem("jokes", JSON.stringify(uniqueJokes));
          }.bind(this)
        )
        .catch(function onRejected(reason) {
          console.log(reason);
          alert(reason);
        });
    });
  }
  upvoteJoke(id) {
    this.setState(state => {
      const currentJoke = state.jokes.find(joke => joke.id === id);
      if (currentJoke) currentJoke.totalVote++;

      state.jokes.sort((a, b) => {
        if (a.totalVote < b.totalVote) return 1;
        if (a.totalVote > b.totalVote) return -1;
        return 0;
      });

      localStorage.setItem("jokes", JSON.stringify(state.jokes));

      return state;
    });
  }
  downvoteJoke(id) {
    this.setState(state => {
      const currentJoke = state.jokes.find(joke => joke.id === id);
      if (currentJoke) currentJoke.totalVote--;

      state.jokes.sort((a, b) => {
        if (a.totalVote < b.totalVote) return 1;
        if (a.totalVote > b.totalVote) return -1;
        return 0;
      });

      localStorage.setItem("jokes", JSON.stringify(state.jokes));

      return state;
    });
  }
  async getJokeJSON() {
    const response = await fetch(JOKE_API, {
      headers: { Accept: "application/json" }
    });
    return response.json();
  }
  getJokes() {
    return Promise.all(
      Array.from({ length: this.props.nJoke }).map(this.getJokeJSON)
    );
  }
  async getUniqueJokes(jokes) {
    const currentJokes = [...jokes];
    const uniqueJokeIds = new Set();
    currentJokes.forEach(joke => uniqueJokeIds.add(joke.id));

    while (uniqueJokeIds.size < jokes.length) {
      const newJoke = await this.getJokeJSON();

      uniqueJokeIds.add(newJoke.id);
      currentJokes.push(newJoke);
    }

    return Array.from(uniqueJokeIds.values()).map(jokeId =>
      currentJokes.find(joke => joke.id === jokeId)
    );
  }
  componentDidMount() {
    new Promise(
      function(resolve, reject) {
        let jokes;
        const jokesJSON = localStorage.getItem("jokes");

        if (jokesJSON) {
          try {
            jokes = JSON.parse(jokesJSON);
            resolve(jokes);
          } catch (error) {
            reject(error);
          }
        } else {
          resolve(this.getJokes());
        }
      }.bind(this)
    )
      .then(
        function onFulfilledJokes(jokes) {
          return this.getUniqueJokes(jokes);
        }.bind(this)
      )
      .then(
        function onFulfilledUniqueJokes(uniqueJokes) {
          this.setState(state => {
            const newState = {
              jokes: [
                ...state.jokes,
                ...uniqueJokes.map(joke => ({
                  ...joke,
                  totalVote: joke.totalVote ? joke.totalVote : 0
                }))
              ],
              isLoaded: true
            };

            localStorage.setItem("jokes", JSON.stringify(newState.jokes));

            return newState;
          });
        }.bind(this)
      )
      .catch(function onRejected(reason) {
        console.log(reason);
        alert(reason);
      });
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
        <button onClick={this.addJokes}>More jokes</button>
        {this.state.isLoaded ? this.renderJokes() : <h1>LOADING...</h1>}
      </div>
    );
  }
}
