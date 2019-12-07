import React from "react";

const Checked = ({ checked, unDone, unChecked, clearChecked }) => {
  let checkedtodo = JSON.parse(localStorage.getItem("checked"));

  const Done = checked.length ? (
    checkedtodo.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span>
            <button className="border-0" onClick={() => unDone(todo)}>
              <i className="tiny teal material-icons">check</i>
            </button>
            <del>{todo.content}</del>
            <button
              className="float-right border-0"
              onClick={() => unChecked(todo.id)}
            >
              <i className="tiny material-icons">delete</i>
            </button>
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">You have not Checked any item yet!</p>
  );

  return (
    <div>
      <label>Done!</label>
      <button
        className="float-right text-danger border-0"
        onClick={() => clearChecked()}
      >
        Delete All!
      </button>
      <div className="todos collection">{Done}</div>
    </div>
  );
};

export default Checked;
