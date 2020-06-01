import React from "react";
import ToDoListItem from "../todo-list-item";
import "./todo-list.css";

const ToDoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  const elements = todos.map((item) => {
    const { id, ...itemsProps } = item;
    return (
      // <li key={item.id}>

      <li key={id} className="list-group-item">
        {/* <ToDOListItem label={item.label} important={item.important} /> если совпадают имена переменных и свойсва оператора, если мы хотим передать каждое свойство обьекта / можно это сделать с помощью СПРЕД оператора  */}
        {/* <ToDOListItem {...item} /> */}
        <ToDoListItem
          {...itemsProps}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });
  return <ul className="list-groupe todo-list">{elements}</ul>;
};

export default ToDoList;
