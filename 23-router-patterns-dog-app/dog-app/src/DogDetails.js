import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class DogDetails extends Component {
  render() {
    const { name, age, src, facts } = this.props;
    return (
      <div className="DogDetails">
        <figure>
          <img
            className="DogDetails__img"
            alt={`a dog name ${name}`}
            src={src}
          />
          <figcaption className="DogDetails__name">{name}</figcaption>
          <figcaption className="DogDetails__age">{age}</figcaption>
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
