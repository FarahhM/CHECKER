import React from "react";
import "./Todo.css";
const Todos = ({ todos, deleteTodo, markDone }) => {
  let newTodos = JSON.parse(localStorage.getItem("todos"));
  console.log(newTodos);

  const todoList = newTodos.length ? (
    newTodos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span>
            <button className="border-0" onClick={() => markDone(todo)}>
              <i className="tiny material-icons">crop_din</i>
            </button>
            {todo.content}
            <button
              className="float-right border-0"
              onClick={() => deleteTodo(todo.id)}
            >
              <i className="tiny material-icons">delete</i>
            </button>
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">You have no Todo Left!</p>
  );

  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
