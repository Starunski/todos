import React, { Component } from "react";
import "./item-add-form.css";

export default class ItemAddForm extends Component {
  state = {
    label: "",
  };

  onLabelChange = (e) => {
    console.log(e.target.value)
    this.setState({label:e.target.value})

  };

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addTodoItem(this.state.label)
    this.setState({label:''})
   
  };
  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="add new To-Do..."
          onChange={this.onLabelChange}
          value={this.state.label}

         
        />
        <button className="btn btn-outline-secondary btn-sm ">Add item</button>
      </form>
    );
  }
}
