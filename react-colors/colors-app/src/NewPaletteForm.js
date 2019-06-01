import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import DraggableColorList from "./DraggableColorList";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import arrayMove from "array-move";

const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth,
    height: "calc(100vh - 64px)"
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});

class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors: 20
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      currentColor: "",
      colors: this.props.palettes[0].colors,
      newColorName: "",
      newPaletteName: ""
    };

    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.addNewColor = this.addNewColor.bind(this);
    this.inputTextChange = this.inputTextChange.bind(this);
    this.handleSavePalette = this.handleSavePalette.bind(this);
    this.clearPalette = this.clearPalette.bind(this);
    this.addRandomedColor = this.addRandomedColor.bind(this);
    this.removeColor = this.removeColor.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", value => {
      return this.state.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });
    ValidatorForm.addValidationRule("isColorUnique", () => {
      return this.state.colors.every(
        ({ color }) => color !== this.state.currentColor
      );
    });
    ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
      return this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  }

  drawerOpen = () => {
    this.setState({ open: true });
  };

  drawerClose = () => {
    this.setState({ open: false });
  };

  updateCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex });
  }

  addNewColor() {
    this.setState(prevState => {
      const newColor = {
        color: this.state.currentColor,
        name: this.state.newColorName
      };

      return {
        colors: [...prevState.colors, newColor],
        newColorName: ""
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

  handleSavePalette() {
    const newPaletteName = this.state.newPaletteName;
    const newPalette = {
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
      paletteName: newPaletteName,
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
    const randomedColor =
      allColors[Math.floor(Math.random() * allColors.length)];

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
    const { classes, maxColors } = this.props;
    const { open, currentColor, colors, newColorName } = this.state;
    const isPaletteFull = colors.length >= maxColors;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
          color="default"
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.drawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Persistent drawer
            </Typography>
            <ValidatorForm onSubmit={this.handleSavePalette}>
              <TextValidator
                label="Palette Name"
                value={this.state.newPaletteName}
                name="newPaletteName"
                onChange={this.inputTextChange}
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={["Enter palette name", "Name already taken"]}
              />
              <Button variant="contained" color="primary" type="submit">
                Save Palette
              </Button>
            </ValidatorForm>
          </Toolbar>
        </AppBar>
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
          <Typography variant="h4">Design Your Palette</Typography>
          <div>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.clearPalette}
            >
              Clear Palette
            </Button>
            <Button
              variant="contained"
              color="primary"
              disabled={isPaletteFull}
              onClick={this.addRandomedColor}
            >
              Random Color
            </Button>
          </div>
          <ChromePicker
            color={currentColor}
            onChangeComplete={this.updateCurrentColor}
          />
          <ValidatorForm onSubmit={this.addNewColor}>
            <TextValidator
              value={newColorName}
              name="newColorName"
              onChange={this.inputTextChange}
              validators={["required", "isColorNameUnique", "isColorUnique"]}
              errorMessages={[
                "Enter a color name",
                "Color name already taken",
                "Color already used"
              ]}
            />
            <Button
              type="submit"
              variant="contained"
              disabled={isPaletteFull}
              style={isPaletteFull ? undefined : { background: currentColor }}
            >
              {isPaletteFull ? "Palette Full" : "Add Color"}
            </Button>
          </ValidatorForm>
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
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
