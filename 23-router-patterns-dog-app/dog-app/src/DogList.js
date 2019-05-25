import React, { Component } from "react";
import { Link } from "react-router-dom";
import uuid from "uuid/v4";

import "./DogList.css";

export default class DogList extends Component {
  render() {
    const { dogs } = this.props;

    return (
      <div className="DogList">
        <h1 className="DogList__header">Click a Dog!</h1>
        <div className="DogList__lists">
          {dogs.map(dog => (
            <figure key={uuid()} className="DogList__figure">
              <div className="DogList__figure__img-container">
                <img alt={`a dog name ${dog.name}`} src={dog.src} />
              </div>
              <figcaption className="DogList__figure__name">
                <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    );
  }
}
