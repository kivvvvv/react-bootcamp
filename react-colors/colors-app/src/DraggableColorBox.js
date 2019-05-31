import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer"
  }
};

function DraggableColorBox(props) {
  const { classes, color } = props;

  return (
    <div className={classes.root} style={{ background: color }}>
      {color}
    </div>
  );
}

export default withStyles(styles)(DraggableColorBox);
