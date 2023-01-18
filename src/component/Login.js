import React from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Base from "./Base";
export default class Login  extends Base{
  constructor(){
    super();
    this.state={
      form:{
        Loginid:"",
        password:""
      }
    }
  }
   
    render(){
        return(
            <center>
            <h2  className="mb-5" style={{marginTop:"65px", marginBottom:"3.rem"}}> Login</h2>
            <Form >
           
            <Form.Group className="mb-4" controlId="formBasicLogin">
             <Form.Control type="Text"  name="Loginid"  value={this.state.form.Loginid} onChange={this.changeFormState} style={{width:"25%"}} placeholder="Login Id" />
           </Form.Group>
      
            <Form.Group className="mb-4" controlId="formBasicLastName">
              <Form.Control type="Password" name="password" value={this.state.form.password} onChange={this.changeFormState} style={{width:"25%"}} placeholder="Password" />
            </Form.Group>
            <Button className="d-grid gap-2 col-3 mx-auto"  variant="primary"type="submit">Submit</Button>
      
    </Form>
          
            </center>
        )
    }
}