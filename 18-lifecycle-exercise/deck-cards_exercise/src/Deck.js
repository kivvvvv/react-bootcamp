import React, { Component } from "react";
import Card from "./Card";

export default class Deck extends Component {
  constructor() {
    super();
    this.state = {
      deck_id: "",
      cardImgs: [],
      remaining: 52
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
    if (this.state.remaining === 0) {
      alert("Error: no cards remaining!");
    } else {
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
            const cardInfo = json.cards[0];

            this.setState(state => {
              return {
                remaining: json.remaining,
                cardImgs: [
                  ...state.cardImgs,
                  {
                    cardUrl: cardInfo.image,
                    cardSuit: cardInfo.suit,
                    cardValue: cardInfo.value
                  }
                ]
              };
            });
          }.bind(this)
        )
        .catch(function onRejected(reason) {
          console.log(reason);
        });
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.shuffleCard}>GIMME A CARD!</button>
        {this.state.cardImgs.length > 0
          ? this.state.cardImgs.map(card => (
              <Card
                key={`${card.cardValue}-OF-${card.cardSuit}`}
                alt={`${card.cardValue} of ${card.cardSuit}`}
                imgSrc={card.cardUrl}
              />
            ))
          : null}
      </div>
    );
  }
}
