import React, { Component } from 'react'

export default class Base extends React.Component {
   
    
      changeFormState = (e) => {
        var data = this.state["form"];
        data[e.target.name] = e.target.value;
        this.setState(data);
        this.setState({});
    
      }
      
}
