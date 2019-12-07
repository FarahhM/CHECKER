import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import Checked from "./Checked";
class App extends Component {
  state = {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
    //[
    // { id: 1, content: "sleep more", done: "false" },
    // { id: 2, content: "drink more coffee", done: "false" }
    //]
    checked: JSON.parse(localStorage.getItem("checked")) || []
  };
  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log(this.state.todos);
  };

  unChecked = id => {
    const unchecked = this.state.checked.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      checked: unchecked
    });
    localStorage.setItem("checked", JSON.stringify(unchecked));
    console.log(this.state.unchecked);
  };

  addTodo = (todo, done) => {
    todo.id = Math.random();
    todo.done = done;
    console.log(this.state.todos);
    const todos = [todo, ...this.state.todos];
    this.setState({
      todos: todos
    });
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  newTodo = todo => {
    console.log(this.state.checked);
    const checked = [todo, ...this.state.checked];
    this.setState({
      checked: checked
    });
    localStorage.setItem("checked", JSON.stringify(checked));
  };
  // markDone = todo => {
  //   todo.done = true;
  //   this.deleteTodo(todo.id);
  //   this.addTodo(todo, true);
  // };
  markDone = todo => {
    todo.done = true;
    console.log(todo.done);
    if (todo.done === true) this.deleteTodo(todo.id);
    this.newTodo(todo);
    // localStorage.setItem("checked", JSON.stringify(todo));
    console.log(todo.done);
    console.log(this.state.checked);
  };
  unDone = todo => {
    todo.done = false;
    console.log(todo.done);
    if (todo.done === false) this.unChecked(todo.id);
    this.addTodo(todo);
  };
  clearChecked = () => {
    let checked = [];
    this.setState({ checked: checked });
    localStorage.setItem("checked", JSON.stringify(checked));
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center teal-text">Checker</h1>
        <AddTodo addTodo={this.addTodo} />
        <Todos
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          markDone={this.markDone}
        />
        <Checked
          checked={this.state.checked}
          unDone={this.unDone}
          unChecked={this.unChecked}
          clearChecked={this.clearChecked}
        />
      </div>
    );
  }
}

export default App;
