import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav';
const axios = require('axios');


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOptions: []
    };
  }
  componentDidMount() {
    axios.get('https://dwaapi.juvasquez88.now.sh/atp/')
      .then(response=>{
        this.setState({
          menuOptions: response.data.atp.options
          })
          console.log(this.state.menuOptions);
          
      })
      .catch(function (error) {
        console.log(error);
      });
      
      
  }

  render() {
    const{menuOptions}=this.state;
    let menu=[];
    for(var i=0;i<menuOptions.length;i++){
      menu.push( <Nav.Item>{menuOptions[i]}</Nav.Item>)
    }
    
    return (
      <Nav
        activeKey="/home"
        onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      >
        {menu}
      </Nav>
    );
  }
}

export default NavBar;