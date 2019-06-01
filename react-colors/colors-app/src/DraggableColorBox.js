import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";
import { SortableElement } from "react-sortable-hoc";

import styles from "./styles/DraggableColorBoxStyles";

function DraggableColorBox(props) {
  const { classes, color, name, handleRemoveColor } = props;

  return (
    <div className={classes.root} style={{ background: color }}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteIcon
          className={classes.deleteIcon}
          onClick={handleRemoveColor}
        />
      </div>
    </div>
  );
}

export default withStyles(styles)(SortableElement(DraggableColorBox));
