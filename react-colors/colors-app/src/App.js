import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import Page from "./Page";

export default class App extends Component {
  constructor() {
    super();

    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = { palettes: savedPalettes || seedColors };

    this.savePalette = this.savePalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }

  findPalette(id) {
    return this.state.palettes.find(palette => palette.id === id);
  }

  deletePalette(id) {
    this.setState(prevState => {
      return {
        palettes: prevState.palettes.filter(palette => palette.id !== id)
      };
    }, this.syncLocalStorage);
  }

  savePalette(newPalette) {
    this.setState(prevState => {
      return {
        palettes: [...prevState.palettes, newPalette]
      };
    }, this.syncLocalStorage);
  }

  syncLocalStorage() {
    //save palettes to local storage
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.palettes)
    );
  }

  render() {
    return (
      <Route
        render={({ location }) => {
          return (
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="page" timeout={500}>
                <Switch location={location}>
                  <Route
                    exact
                    path="/"
                    render={({ history }) => (
                      <Page>
                        <PaletteList
                          palettes={this.state.palettes}
                          history={history}
                          deletePalette={this.deletePalette}
                        />
                      </Page>
                    )}
                  />
                  <Route
                    exact
                    path="/palette/new"
                    render={({ history }) => (
                      <Page>
                        <NewPaletteForm
                          savePalette={this.savePalette}
                          history={history}
                          palettes={this.state.palettes}
                        />
                      </Page>
                    )}
                  />
                  <Route
                    exact
                    path="/palette/:id"
                    render={({ match }) => (
                      <Page>
                        <Palette
                          palette={generatePalette(
                            this.findPalette(match.params.id)
                          )}
                        />
                      </Page>
                    )}
                  />
                  <Route
                    exact
                    path="/palette/:paletteId/:colorId"
                    render={({ match }) => (
                      <Page>
                        <SingleColorPalette
                          palette={generatePalette(
                            this.findPalette(match.params.paletteId)
                          )}
                          colorId={match.params.colorId}
                        />
                      </Page>
                    )}
                  />
                  <Route
                    render={({ history }) => (
                      <Page>
                        <PaletteList
                          palettes={this.state.palettes}
                          history={history}
                          deletePalette={this.deletePalette}
                        />
                      </Page>
                    )}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          );
        }}
      />
    );
  }
}
