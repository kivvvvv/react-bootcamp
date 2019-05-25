import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    const dogsProps = this.props.routesInfoProps.dogs;

    return (
      <nav>
        <ul>
          {dogsProps.map(dog => (
            <li>
              <NavLink to={`/dogs/${dog.name}`}>{dog.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
