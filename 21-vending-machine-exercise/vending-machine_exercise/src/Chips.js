import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Chips extends Component {
  render() {
    return (
      <div>
        <h1>Chips</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">GO BACK</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
