import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import { Switch, Route } from "react-router-dom";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      palettes: seedColors
    };
    this.savePalette = this.savePalette.bind(this);
  }

  findPalette(id) {
    return this.state.palettes.find(palette => palette.id === id);
  }

  savePalette(newPalette) {
    this.setState(prevState => {
      return {
        palettes: [...prevState.palettes, newPalette]
      };
    });
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={({ history }) => (
            <PaletteList palettes={this.state.palettes} history={history} />
          )}
        />
        <Route
          exact
          path="/palette/new"
          render={({ history }) => (
            <NewPaletteForm
              savePalette={this.savePalette}
              history={history}
              palettes={this.state.palettes}
            />
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
          render={({ match }) => (
            <SingleColorPalette
              palette={generatePalette(
                this.findPalette(match.params.paletteId)
              )}
              colorId={match.params.colorId}
            />
          )}
        />
      </Switch>
    );
  }
}
