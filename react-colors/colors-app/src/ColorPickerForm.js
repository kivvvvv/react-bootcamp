import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

export default class ColorPickerForm extends Component {
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
    const { isPaletteFull } = this.props;

    return (
      <div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={this.updateCurrentColor}
        />
        <ValidatorForm onSubmit={this.handleAddNewColor}>
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
      </div>
    );
  }
}
