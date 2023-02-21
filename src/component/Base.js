import React, { Component } from 'react'

export default class Base extends React.Component {
   changeState1=(e)=>{
    var data={};
    data[e.target.name]=e.target.value;
    this.setState(data);

   }
  Changestate=(e)=>{
    var data= this.state["form"]
    data[e.target.name]=e.target.value
    this.setState(data)

  }
  changeInputError = (name, value) => {
    var data = this.state["inputError"];
    data[name] = value;
    this.setState(data);
  }
  getInputError = (name) => {
    var data = this.state["inputError"];
    return data[name];

  }


   
    

    
      
}
