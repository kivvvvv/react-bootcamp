import React, { Component } from "react";
import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Sardine from "./Sardine";
import Soda from "./Soda";
import { NavLink, Switch, Route } from "react-router-dom";
import "./NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="NavBar">
          <NavLink
            className="NavBar__link"
            activeClassName="NavBar__link--active"
            exact
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="NavBar__link"
            activeClassName="NavBar__link--active"
            exact
            to="/chips"
          >
            Chips
          </NavLink>
          <NavLink
            className="NavBar__link"
            activeClassName="NavBar__link--active"
            exact
            to="/soda"
          >
            Soda
          </NavLink>
          <NavLink
            className="NavBar__link"
            activeClassName="NavBar__link--active"
            exact
            to="/sardine"
          >
            Sardine
          </NavLink>
        </nav>
        <Switch>
          <Route exact path="/" component={VendingMachine} />
          <Route exact path="/chips" component={Chips} />
          <Route exact path="/soda" component={Soda} />
          <Route exact path="/sardine" component={Sardine} />
        </Switch>
      </div>
    );
  }
}
