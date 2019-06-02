import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Picker } from "emoji-mart";

import "emoji-mart/css/emoji-mart.css";

export default class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: "form",
      newPaletteName: ""
    };

    this.inputTextChange = this.inputTextChange.bind(this);
    this.handleHideForm = this.handleHideForm.bind(this);
    this.showEmojiPicker = this.showEmojiPicker.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
      return this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  }

  inputTextChange(e) {
    const target = e.target;
    const { name, value } = target;
    this.setState({
      [name]: value
    });
  }

  handleHideForm() {
    this.props.hideForm();
  }

  showEmojiPicker() {
    this.setState({
      stage: "emoji"
    });
  }

  savePalette(emoji) {
    const newPalette = {
      paletteName: this.state.newPaletteName,
      emoji: emoji.native
    };
    this.props.handleSavePalette(newPalette);
    this.setState({
      stage: ""
    });
  }

  render() {
    const { stage, newPaletteName } = this.state;

    return (
      <div>
        <Dialog
          open={stage === "emoji"}
          onClose={this.handleHideForm}
          aria-labelledby="form-dialog-title-emoji"
        >
          <DialogTitle id="form-dialog-title-emoji">
            Pick a Palette Emoji
          </DialogTitle>
          <Picker onSelect={this.savePalette} />
        </Dialog>
        <Dialog
          open={stage === "form"}
          onClose={this.handleHideForm}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Choose a Palette Name
          </DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogContent>
              <DialogContentText>
                Please enter a name for your new beautiful palette.
                <br />
                Make sure it's unique!
              </DialogContentText>
              <TextValidator
                fullWidth
                label="Palette Name"
                value={newPaletteName}
                name="newPaletteName"
                onChange={this.inputTextChange}
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={["Enter palette name", "Name already taken"]}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleHideForm} color="primary">
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Save
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}
