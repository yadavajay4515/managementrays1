import React from "react";
import axios from "axios";
import ReactDOM from 'react-dom/client';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Base from "./Base";
import Nextpage from "../Nextpage";

export default class Login  extends Base{
  constructor(props){
    super(props); 

    this.state={
      inputError:{
        type: '',
        message: "",
        error: "",
        loginId: '',
        password: '',

      },
      form:{
        loginid:"",
        password:""
      }
    }
  }
  login=(e)=>{
    e.preventDefault();
    axios.post("http://api.sunilos.com:9080/ORSP10/Auth/login",this.state.form)
    .then((res)=>{
      console.log(res)
      if(res.data.success === true){
        alert("login successfull")
        // <Navbar2/>
        // <Nextpage/>
        // const root = ReactDOM.createRoot(document.getElementById('root'));
          // root.render(<Nextpage userid={res.data.result.data.name} />);
      }
      if(res.data.result.inputerror){
        this.setState({inputError:res.data.result.inputerror})
        console.log(res)
      }
      if(res.data.result.message){
        this.setState({inputError:res.data.result.message})
        console.log("jayshriram")
      }
      else{
        console.log(res)
        this.changeInputError("error", "true");
        this.changeInputError("message", "Invalid Id or password");
        this.changeInputError("type", "danger");
        this.changeInputError("loginId", "");
        this.changeInputError("password", "");
      }
    })
  }
   
    render(){
        return(
            <center>
            <h2  className="mb-5" style={{marginTop:"65px", marginBottom:"3.rem"}}> Login</h2>
            {/* {this.state.inputError.message} */}
            <Form >
           
            <Form.Group className="mb-4" controlId="formBasicLogin">
               <Form.Control type="Text"  name="loginId"  value={this.state.form.loginId} onChange={this.Changestate} style={{width:"25%"}} placeholder="Login Id" />
               {/* <Formerror errorName={this.getInputError('Loginid')}/> */}
               {this.state.inputError.loginId}
               {this.state.inputError.message}
           </Form.Group>
      
            <Form.Group className="mb-4" controlId="formBasicLastName">
              <Form.Control type="Password" name="password" value={this.state.form.password} onChange={this.Changestate} style={{width:"25%"}} placeholder="Password" />
              {this.state.inputError.password}
            </Form.Group>
            <Button className="d-grid gap-2 col-3 mx-auto" onClick={this.login} variant="primary"type="submit">Submit</Button>
      
    </Form>
          
            </center>
        )
    }
}