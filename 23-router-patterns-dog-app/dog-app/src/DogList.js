import React, { Component } from "react";
import DogDetails from "./DogDetails";

export default class DogList extends Component {
  render() {
    const { dogs } = this.props;
    return (
      <div>
        {dogs.map(dog => (
          <DogDetails {...dog} />
        ))}
      </div>
    );
  }
}
