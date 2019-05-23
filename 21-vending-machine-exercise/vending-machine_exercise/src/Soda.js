import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Soda extends Component {
  render() {
    return (
      <div>
        <h1>Soda</h1>
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
