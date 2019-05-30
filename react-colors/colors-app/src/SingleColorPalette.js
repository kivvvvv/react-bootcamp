import React, { Component } from "react";
import ColorBox from "./ColorBox";

export default class SingleColorPalette extends Component {
  constructor(props) {
    super(props);

    this._shades = this.gatherShades();
    console.log(this._shades);
  }
  gatherShades() {
    // return all shades of given color
    const { palette, colorId } = this.props;
    let shades = [];
    const allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorId)
      );
    }

    return shades.slice(1);
  }
  render() {
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.id}
        background={color.hex}
        name={color.name}
        showLink={false}
      />
    ));

    return (
      <div className="Palette">
        <h1>SINGLE COLOR PAGE!</h1>
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}
