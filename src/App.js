import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import ListComponent from "./components/listComponent"
import UserForm from "./components/formComponent"

class App extends Component{
  constructor(){
    super()
    this.state = {
      name : "",
      lastName : "",
      namesArray: []
    }
    this.handleChange = this.handleChange.bind( this )
    this.saveHandler = this.saveHandler.bind( this )
  }
  handleChange(event){
    this.setState({ [event.target.name] : event.target.value })
  }

  saveHandler(){
    this.setState({ 
      namesArray:[...this.state.namesArray, `${this.state.name} ${this.state.lastName}`],
      name:"",
      lastName:""
    })
  }

  render(){
    return(
      <>
        <UserForm
          saveHandler = {this.saveHandler}
          handleChange = {this.handleChange}
          name= { this.state.name }
          lastName = { this.state.lastName}
          />
        <ListComponent 
          namesArray={this.state.namesArray}
        />
      </>
    )
  }
  }



export default App;


/*
class App extends Component {
  constructor() {
    super();
    this.state = {
      saludo: "Hola Koder"
    };
    this.handler = this.handler.bind( this );
  }

  handler(event) {
    let value = event.target.value;
    this.setState({ saludo: value });
  }

  render() {
    return (
      <>
        <input className="inputClass" type="text" onChange={this.handler} />
        <h1 className="h1Class">{this.state.saludo ? this.state.saludo : "Hola Koders!"}</h1>
      </>
    );
  }
}

export default App;
*/