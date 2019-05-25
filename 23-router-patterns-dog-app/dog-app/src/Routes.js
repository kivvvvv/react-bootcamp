import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

export default class Routes extends Component {
  render() {
    const dogsProps = this.props.routesInfoProps.dogs;
    console.log(dogsProps);

    let matchedDogDetailsComponent = ({ match }) => {
      const paramsName = match.params.name;
      const foundDog = dogsProps.find(
        dog => dog.name.toLowerCase() === paramsName.toLowerCase()
      );

      if (foundDog) return <DogDetails {...foundDog} />;
      else return <Redirect to="/" />;
    };

    return (
      <Switch>
        <Route
          exact
          path={["/", "/dogs"]}
          render={() => <DogList dogs={dogsProps} />}
        />
        <Route exact path="/dogs/:name" render={matchedDogDetailsComponent} />}
        <Redirect to="/" />
      </Switch>
    );
  }
}
