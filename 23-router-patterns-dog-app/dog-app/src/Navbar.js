import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import uuid from "uuid/v4";

import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    const dogsProps = this.props.routesInfoProps.dogs;

    return (
      <nav className="Navbar">
        <ul className="Navbar__lists">
          {dogsProps.map(dog => (
            <li key={uuid()} className="Navbar__lists__item">
              <NavLink
                activeClassName="lists__item__link--active"
                to={`/dogs/${dog.name}`}
              >
                {dog.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
