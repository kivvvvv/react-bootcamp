import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class DogList extends Component {
  render() {
    console.log("DogList.js: ", this.props);
    const { dogs } = this.props;

    return (
      <div className="DogList">
        <h1>Click a Dog!</h1>
        <div className="DogList__lists">
          {dogs.map(dog => (
            <figure className="DogList__figure">
              <div className="DogList__figure__img">
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
