import React, { Component } from "react";

export default class NewBoxForm extends Component {
  render() {
    return (
      <div>
        <form>
          <label>
            Width: <input name="width" />
          </label>
          <label>
            Height: <input name="height" />
          </label>
          <label>
            Background Color: <input name="backgroundColor" />
          </label>
          <button>Add a new box!</button>
        </form>
      </div>
    );
  }
}
