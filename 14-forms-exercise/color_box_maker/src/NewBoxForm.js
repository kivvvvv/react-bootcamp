import React, { Component } from "react";

export default class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "",
      height: "",
      backgroundColor: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addBox(this.state);
    this.setState({
      width: "",
      height: "",
      backgroundColor: ""
    });
  }
  render() {
    const { width, height, backgroundColor } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Width:{" "}
            <input name="width" value={width} onChange={this.handleChange} />
          </label>
          <label>
            Height:{" "}
            <input name="height" value={height} onChange={this.handleChange} />
          </label>
          <label>
            Background Color:{" "}
            <input
              name="backgroundColor"
              value={backgroundColor}
              onChange={this.handleChange}
            />
          </label>
          <button>Add a new box!</button>
        </form>
      </div>
    );
  }
}
