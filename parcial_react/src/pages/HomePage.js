import React, { Component } from "react";
import ListOne from "../containers/ListOne"
import "../styles/HomePage.css";
const axios = require('axios');

class HomePage extends Component { 
    render() {
    return (
      <div className="homePage">
        <ListOne/>
      </div>
    );
  }
}

export default HomePage;