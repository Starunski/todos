import React from "react";
import "./header.css";

const Header = ({ toDo, done }) => {
  return (
    <div className="app-header">
      <h1> YOUR TO DO LIST </h1>
      <h3>
        <span>{toDo}</span> more to do and <span>{done}</span> done
      </h3>
    </div>
  );
};

export default Header;
