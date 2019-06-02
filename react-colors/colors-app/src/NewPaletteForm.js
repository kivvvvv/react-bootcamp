import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import DraggableColorList from "./DraggableColorList";
import arrayMove from "array-move";

import seedColors from "./seedColors";
import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";

import styles from "./styles/NewPaletteFormStyles";

class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors: 20
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      colors: seedColors[0].colors
    };

    this.addNewColor = this.addNewColor.bind(this);
    this.inputTextChange = this.inputTextChange.bind(this);
    this.handleSavePalette = this.handleSavePalette.bind(this);
    this.clearPalette = this.clearPalette.bind(this);
    this.addRandomedColor = this.addRandomedColor.bind(this);
    this.removeColor = this.removeColor.bind(this);
  }

  drawerOpen = () => {
    this.setState({ open: true });
  };

  drawerClose = () => {
    this.setState({ open: false });
  };

  addNewColor(newColor) {
    this.setState(prevState => {
      return {
        colors: [...prevState.colors, newColor]
      };
    });
  }

  inputTextChange(e) {
    const target = e.target;
    const { name, value } = target;
    this.setState({
      [name]: value
    });
  }

  handleSavePalette(palette) {
    const newPalette = {
      ...palette,
      id: palette.paletteName.toLowerCase().replace(/ /g, "-"),
      colors: this.state.colors
    };
    this.props.savePalette(newPalette);

    this.props.history.push("/");
  }

  clearPalette() {
    this.setState({ colors: [] });
  }

  addRandomedColor() {
    const allColors = this.props.palettes.map(palette => palette.colors).flat();
    let iRand;
    let randomedColor;
    let isDuplicatedColor = true;

    while (isDuplicatedColor) {
      iRand = Math.floor(Math.random() * allColors.length);
      randomedColor = allColors[iRand];
      isDuplicatedColor = this.state.colors.some(
        color => color.name === randomedColor.name
      );
    }

    this.setState(prevState => {
      return {
        colors: [...prevState.colors, randomedColor]
      };
    });
  }

  removeColor(colorName) {
    this.setState(prevProps => {
      return {
        colors: prevProps.colors.filter(color => color.name !== colorName)
      };
    });
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex)
    }));
  };

  render() {
    const { classes, maxColors, palettes } = this.props;
    const { open, colors } = this.state;
    const isPaletteFull = colors.length >= maxColors;

    return (
      <div className={classes.root}>
        <PaletteFormNav
          open={open}
          palettes={palettes}
          drawerOpen={this.drawerOpen}
          handleSavePalette={this.handleSavePalette}
        />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.drawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.container}>
            <Typography variant="h4" gutterBottom>
              Design Your Palette
            </Typography>
            <div className={classes.buttons}>
              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
                onClick={this.clearPalette}
              >
                Clear Palette
              </Button>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                disabled={isPaletteFull}
                onClick={this.addRandomedColor}
              >
                Random Color
              </Button>
            </div>
            <ColorPickerForm
              colors={colors}
              isPaletteFull={isPaletteFull}
              addNewColor={this.addNewColor}
            />
          </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList
            colors={colors}
            removeColor={this.removeColor}
            axis="xy"
            onSortEnd={this.onSortEnd}
            distance={50}
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
