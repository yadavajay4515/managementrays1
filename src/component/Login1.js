import React, { Component } from "react";

export default class Login1 extends Component {
  constructor() {
    super();
    this.state = {
      form: { loginId: "", password: "" },
    };
  }
  onChangeEvent=(e)=> {
    var change= this.state["form"];
    change[e.target.name] = e.target.value;
    this.setState(change);
  }
  save=async() => {
   const data = await fetch("http://api.sunilos.com:9080/ORSP10/Auth/login", {
      method: "POST",
      credentials: 'include',
      body: JSON.stringify(this.state.form       
    ),
    headers: {
        "Content-type": "application/json;"
    }
    })
      // Converting to JSON
      data.then((response) => response.json())
      // Displaying results to console
      data.then((json) => {
        console.log(json);
       
        
    });
  };

  render() {
    return (
      <>
        <h1>login id</h1>
        <form action="">
        <input
          type="text"
          name="loginId"
          value={this.state.form.loginId}
          onChange={(e) => this.onChangeEvent(e)}
        />
        <h1>Password</h1>
        <input
          type="password"
          name="password"
          value={this.state.form.password}
          onChange={(e) => this.onChangeEvent(e)}
        />
        <button onClick={this.save}>submit</button>
        </form>
      </>
    );
  }
}
