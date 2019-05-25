import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./DogDetails.css";

export default class DogDetails extends Component {
  render() {
    const { name, age, src, facts } = this.props;
    return (
      <div className="DogDetails">
        <figure>
          <div className="DogDetails__img-container">
            <img alt={`a dog name ${name}`} src={src} />
          </div>
          <figcaption className="DogDetails__name">{name}</figcaption>
          <figcaption className="DogDetails__age">{age} years old</figcaption>
          {facts.map(fact => (
            <figcaption className="DogDetails__facts">{fact}</figcaption>
          ))}
          <div>
            <Link to="/">Go Back</Link>
          </div>
        </figure>
      </div>
    );
  }
}
