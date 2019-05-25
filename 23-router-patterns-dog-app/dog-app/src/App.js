import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import DogList from "./DogList";

import whiskey from "./whiskey.jpg";
import hazel from "./hazel.jpg";
import tubby from "./tubby.jpg";

export default class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  };
  render() {
    return (
      <BrowserRouter>
        <DogList dogs={this.props.dogs} />
      </BrowserRouter>
    );
  }
}
