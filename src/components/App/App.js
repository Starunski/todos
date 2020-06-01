import React, { Component } from "react";
import ReactDom from "react-dom";
import './App.css';

import Header from "../header";
import SearchBar from "../search-bar";
import ItemStatusFilter from "../item-status-filter";
import ToDoList from "../todo-list";
import ItemAddForm from "../item-add-form";


export default class App extends Component {
  maxId = 100;

  state = {
    toDos: [
      this.createToDoItem("find a new job "),
      this.createToDoItem("Drink coffe"),
      this.createToDoItem("Learn React"),
      this.createToDoItem("More practice!"),
      { id: 1, label: "Make app!!!", important: false },
    ],
    term: "",
    filter: "all", //active all done
  };
  createToDoItem(text) {
    return {
      id: this.maxId++,
      label: text,
      important: false,
      done: false,
    };
  }

  deleteItem = (id) => {
    console.log(id);
    this.setState(({ toDos }) => {
      const index = toDos.findIndex((el) => el.id === id);
      const newArr = [...toDos.slice(0, index), ...toDos.slice(index + 1)];
      return {
        toDos: newArr,
      };
    });
  };

  addNewToDo = (text) => {
    console.log(text);

    const newTodoElem = this.createToDoItem(text);
    this.setState(({ toDos }) => {
      const newArr = [...toDos, newTodoElem];
      return {
        toDos: newArr,
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const index = arr.findIndex((el) => el.id === id);
    //1. update object
    const oldItem = arr[index];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    //2.construct new array
    return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
  }

  onToggleImportant = (id) => {
    console.log("important", id);
    this.setState(({ toDos }) => {
      return {
        toDos: this.toggleProperty(toDos, id, "important"),
      };
    });
  };

  onToggleDone = (id) => {
    console.log("Done", id);
    this.setState(({ toDos }) => {
      return {
        toDos: this.toggleProperty(toDos, id, "done"),
      };
    });
  };

  onSearchChange = (term) => {
    this.setState({ term });
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  search(items, term) {
    if (term === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }


  filter(items, filter) {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter((item) => !item.done);
      case "done":
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  render() {
    const { toDos, term, filter } = this.state;
    const visibleItems = this.filter(this.search(toDos, term), filter);

    const doneCount = toDos.filter((el) => el.done).length;
    const todoCount = toDos.length - doneCount;

    return (
      <div className="todo-app">
        <Header toDo={todoCount} done={doneCount} />
        <div className="search-panel d-flex justify-content-between">
          <SearchBar onSearchChange={this.onSearchChange} className='search-input'/>
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>
        <ToDoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm addTodoItem={this.addNewToDo} />
      </div>
    );
  }
}
