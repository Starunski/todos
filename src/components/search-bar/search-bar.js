import React, { Component } from "react";
import ItemStatusFilter from "../item-status-filter";
import "./search-bar.css";



export default class SearchBar extends Component {
  state = {
    term: "",
  };

  onSearchChange = (e) => {
    const term = e.target.value
    this.setState({term});
    this.props.onSearchChange(term)
  }

  render() {
    const searchText = "Search todos in list";
    return (
      <div className="search-bar ">
        <input
          className="form-control search-input "
          placeholder={searchText}
          onChange={this.onSearchChange}
          value={this.state.term}
        />
       
      </div>
    );
  }
}
