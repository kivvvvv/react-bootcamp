import React, { Component } from "react";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import PaletteFooter from "./PaletteFooter";
import { Link } from "react-router-dom";

export default class SingleColorPalette extends Component {
  constructor(props) {
    super(props);

    this._shades = this.gatherShades();

    this.state = {
      format: "hex"
    };

    this.changeFormat = this.changeFormat.bind(this);
  }

  changeFormat(value) {
    this.setState({
      format: value
    });
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
    const { format } = this.state;
    const { paletteName, emoji, id } = this.props.palette;

    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.name}
        background={color[format]}
        name={color.name}
        showingFullPalette={false}
      />
    ));

    return (
      <div className="SingleColorPalette Palette">
        <Navbar changeFormat={this.changeFormat} showingAllColor={false} />
        <div className="Palette-colors">
          {colorBoxes}
          <div className="go-back ColorBox">
            <Link to={`/palette/${id}`} className="back-button">
              GO BACK
            </Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}
