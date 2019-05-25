import React, { Component } from "react";

export default class DogList extends Component {
  render() {
    console.log("DogList.js: ", this.props);
    const { dogs } = this.props;

    return (
      <div>
        <ul>
          {dogs.map(dog => (
            <li>{dog.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
