import React, { Component } from "react";
import "../styles/ListOne.css";
import CardPlayer from '../components/CardPlayer'
const axios = require('axios');


class ListOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listPlayers:[],
      name:"",
      country:"",
      age:"",
      infor:""
    };
  }
  componentDidMount() {
    axios.get('https://dwaapi.juvasquez88.now.sh/atp/')
      .then(response=>{
        this.setState({
          listPlayers: response.data.atp.players
          });  
      })
      .catch(function (error) {
        console.log(error);
      });
      
      
  }

  render() {
    const{listPlayers}=this.state;
    let cards;
    cards=(
      <div className="listOne__card-container">
        {listPlayers.map(({ name, country, age, urlInfo }) => (
          <CardPlayer
            name={name}
            country={country}
            age={age}
            info={urlInfo}
            key={name}
          />
        ))}
      </div>
    );
    return (
      <div className="listOne">
        {cards}
      </div>
    );
  }
}

export default ListOne;