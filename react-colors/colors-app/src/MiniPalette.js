import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";

import styles from "./styles/MiniPaletteStyles";

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors } = props;
  const miniColorBoxes = colors.map(color => (
    <div
      key={color.name}
      className={classes.miniColor}
      style={{ background: color.color }}
    />
  ));

  return (
    <div className={classes.root} onClick={props.handleClick}>
      <DeleteIcon className={classes.deleteIcon} />
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
