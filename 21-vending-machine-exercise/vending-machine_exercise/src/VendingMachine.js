import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class VendingMachine extends Component {
  render() {
    return (
      <div>
        <h1>The Vending Machine</h1>
        <nav>
          <ul>
            <li>
              <Link to="/chips">CHIPS</Link>
            </li>
            <li>
              <Link to="/soda">SODA</Link>
            </li>
            <li>
              <Link to="/sardine">FRESH SARDINES</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
