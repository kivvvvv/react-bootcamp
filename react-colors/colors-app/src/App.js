import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import { Switch, Route } from "react-router-dom";

export default class App extends Component {
  findPalette(id) {
    return seedColors.find(palette => palette.id === id);
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>PALETTE LIST GOES HERE</h1>} />
        <Route
          exact
          path="/palette/:id"
          render={({ match }) => (
            <Palette
              palette={generatePalette(this.findPalette(match.params.id))}
            />
          )}
        />
      </Switch>
    );
  }
}
