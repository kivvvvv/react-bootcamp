import React, { Component } from "react";
import Card from "./Card";

export default class Deck extends Component {
  constructor() {
    super();
    this.state = {
      deck_id: "",
      cardImgs: []
    };
    this.shuffleCard = this.shuffleCard.bind(this);
  }
  componentDidMount() {
    const url = "https://deckofcardsapi.com/api/deck/new/shuffle/";
    fetch(url)
      .then(function onFulfilled(response) {
        return response.json();
      })
      .then(
        function onFulfilledJSON(json) {
          this.setState({ deck_id: json.deck_id });
        }.bind(this)
      )
      .catch(function onRejected(reason) {
        console.log(reason);
      });
  }
  shuffleCard() {
    const cardUrl = `https://deckofcardsapi.com/api/deck/${
      this.state.deck_id
    }/draw/`;

    fetch(cardUrl)
      .then(function onFulfilled(response) {
        return response.json();
      })
      .then(
        function onFulfilledJSON(json) {
          // console.log(json);
          this.setState(state => {
            return {
              cardImgs: [...state.cardImgs, json.cards[0].image]
            };
          });
        }.bind(this)
      )
      .catch(function onRejected(reason) {
        console.log(reason);
      });
  }
  render() {
    return (
      <div>
        <button onClick={this.shuffleCard}>GIMME A CARD!</button>
        {this.state.cardImgs.length > 0
          ? this.state.cardImgs.map(card => <Card imgSrc={card} />)
          : null}
      </div>
    );
  }
}
