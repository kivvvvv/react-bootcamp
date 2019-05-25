import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import uuid from "uuid/v4";

export default class Navbar extends Component {
  render() {
    const dogsProps = this.props.routesInfoProps.dogs;

    return (
      <nav>
        <ul>
          {dogsProps.map(dog => (
            <li key={uuid()}>
              <NavLink to={`/dogs/${dog.name}`}>{dog.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
