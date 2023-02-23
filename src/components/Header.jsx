import React, { Component } from "react";
import logo from '../images/task_icon.png';
import '../App.js';

class Header extends Component {  
  render() {
    return (
      <header className="Header">
        <img width="70px" src={logo} alt="Icone Todo List" />
        <h1>Todo List</h1>
      </header>
    );
  };
};

export default Header;
