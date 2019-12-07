import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: ""
  };
  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.content) this.props.addTodo(this.state, false);
    this.setState({
      content: ""
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new Todo</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
            className="smaller-input"
          />
          <button className="border-0">
            <i className=" material-icons">add</i>
          </button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
