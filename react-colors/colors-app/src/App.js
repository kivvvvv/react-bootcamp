import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import { Switch, Route } from "react-router-dom";
import PaletteList from "./PaletteList";

export default class App extends Component {
  findPalette(id) {
    return seedColors.find(palette => palette.id === id);
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={({ history }) => (
            <PaletteList palettes={seedColors} history={history} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={({ match }) => (
            <Palette
              palette={generatePalette(this.findPalette(match.params.id))}
            />
          )}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={() => <h1>SINGLE COLOR PAGE!</h1>}
        />
      </Switch>
    );
  }
}
