import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";

import styles from "./styles/MiniPaletteStyles";

class MiniPalette extends PureComponent {
  constructor(props) {
    super(props);
    this.handleDeletePalette = this.handleDeletePalette.bind(this);
    this.handleGoToPalette = this.handleGoToPalette.bind(this);
  }

  handleDeletePalette(e) {
    e.stopPropagation();
    this.props.openDialog(this.props.id);
  }

  handleGoToPalette() {
    this.props.goToPalette(this.props.id);
  }

  render() {
    const { classes, paletteName, emoji, colors } = this.props;
    const miniColorBoxes = colors.map(color => (
      <div
        key={color.name}
        className={classes.miniColor}
        style={{ background: color.color }}
      />
    ));

    return (
      <div className={classes.root} onClick={this.handleGoToPalette}>
        <DeleteIcon
          className={classes.deleteIcon}
          onClick={this.handleDeletePalette}
        />
        <div className={classes.colors}>{miniColorBoxes}</div>
        <h5 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);
