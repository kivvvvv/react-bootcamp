import React, { Component, createContext } from "react";

export const LanguageContext = createContext();

export class LanguageProvider extends Component {
  constructor() {
    super();
    this.state = {
      language: "spanish"
    };
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage(e) {
    this.setState({ language: e.target.value });
  }

  render() {
    return (
      <LanguageContext.Provider
        value={{ ...this.state, changeLanguage: this.changeLanguage }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

export const withLanguageContext = BaseComponent => props => {
  return (
    <LanguageContext.Consumer>
      {value => <BaseComponent languageContext={value} {...props} />}
    </LanguageContext.Consumer>
  );
};
