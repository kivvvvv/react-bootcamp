import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  picker: {
    marginTop: "2rem"
  },
  addColor: {
    width: "100%",
    padding: "1rem",
    marginTop: "1rem",
    fontSize: "2rem"
  },
  colorNameInput: {
    width: "100%",
    height: "70px"
  }
};

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: "",
      newColorName: ""
    };

    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.inputTextChange = this.inputTextChange.bind(this);
    this.handleAddNewColor = this.handleAddNewColor.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", value => {
      return this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });
    ValidatorForm.addValidationRule("isColorUnique", () => {
      return this.props.colors.every(
        ({ color }) => color !== this.state.currentColor
      );
    });
  }

  updateCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex });
  }

  inputTextChange(e) {
    const target = e.target;
    const { name, value } = target;
    this.setState({
      [name]: value
    });
  }

  handleAddNewColor() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    };
    this.props.addNewColor(newColor);

    this.setState({
      newColorName: ""
    });
  }

  render() {
    const { currentColor, newColorName } = this.state;
    const { classes, isPaletteFull } = this.props;

    return (
      <div>
        <ChromePicker
          width="100%"
          className={classes.picker}
          color={currentColor}
          onChangeComplete={this.updateCurrentColor}
        />
        <ValidatorForm onSubmit={this.handleAddNewColor}>
          <TextValidator
            className={classes.colorNameInput}
            variant="filled"
            margin="normal"
            placeholder="Color Name"
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
            className={classes.addColor}
            style={isPaletteFull ? undefined : { background: currentColor }}
          >
            {isPaletteFull ? "Palette Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
