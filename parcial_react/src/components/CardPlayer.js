
import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import "../styles/ListOne.css";

class CardPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondList: [],
      errorMsg: ""
    };
  }
  handleAdd = (e, name, country, age, info) => {
    e.preventDefault();
    var newList = this.state.secondList;
    var secondCard = [name, country, age, info];
    if (this.state.secondList.length <= 5) {
      
      this.setState(state => {
        return { ...state, secondList: [...state.secondList,secondCard], errorMsg: "" }
      });
    }
    else {
      this.setState({
        errorMsg: "No se pueden agregar más juggadores"
      });
    }
  }
  render() {
    const { name, country, age, info } = this.props;
    const{secondList,errorMsg}=this.state;  
    var secondCards=[];
    for(var i=0; i<secondList.length;i++){
      secondCards.push([...secondCards, <Card.Body key={secondList[i]}>
          <Card.Title>{secondList[i][0]}</Card.Title>
          <Card.Text>
            <b>País: </b>{secondList[i][1]}<br />
            <b>Edad: </b>{secondList[i][2]}<br />
            <a href={secondList[i][3]}>Info:</a><br />
          </Card.Text>
        
      </Card.Body>])
      console.log(secondCards);
      
    }
    return (
      <div className="all">
        <div className="one">
          <Card className="cardPlayer" bg="light" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                <b>País: </b>{country}<br />
                <b>Edad: </b>{age}<br />
                <a href={info}>Info:</a><br />
              </Card.Text>
              <button onClick={e => { this.handleAdd(e, name, country, age, info) }}>Add SecondList</button>
            </Card.Body>
          </Card>
        </div>
        <div className="two">
          <Card className="cardPlayer" bg="light" style={{ width: '18rem' }}>
            {secondCards}
          </Card>
        </div>
      </div>

    );
  }
}

export default CardPlayer;