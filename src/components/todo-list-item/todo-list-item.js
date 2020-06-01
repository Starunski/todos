import React, { Component } from "react";
import "./todo-list-item.css";

// const ToDOListItem = (props) => {
//   return (

//   <span>{props.label}</span>

//   );
// };

//   export default ToDOListItem

export default class ToDoListItem extends Component {
  

  render() {
    const {
      label,
      onDeleted,
      done,
      important,
      onToggleImportant,
      onToggleDone,
    } = this.props;

    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }
    if (important) {
      classNames += " important";
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label " onClick={onToggleDone}>
          {label}
        </span>

        <i className="fa fa-burn"> </i>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
