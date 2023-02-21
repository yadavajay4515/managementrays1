import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Base from "./Base";
import axios from "axios";
import Formerror from "./Formerror";
import FormMessage from "./FormMessage";
export default class Registration extends Base {
  constructor(props) {
    super(props);

    this.state = {
      inputError:{
        
        
        error: '',
        message: '',
        firstName: '',
        lastName: '',
        loginId: '',
        password: '',
        roleId: '',
        type: ''


      },
      form: {
        firstName: "",
        lastName: "",
        loginId: "",
        roleId: "",
        password:""
      },
    };
  }
  save = (e) => {
    e.preventDefault();
    axios.post("http://api.sunilos.com:9080/ORSP10/User/save", this.state.form)
      .then((res) => {
        console.log(res);
        if(res.data.result.inputerror){
          console.log("error is done")
          this.setState({ inputError: res.data.result.inputerror });
        }
        else{
          this.changeInputError("message", "Register successfully");
          this.changeInputError("error", "false");
          this.changeInputError("firstName", "");
          this.changeInputError("lastName", "");
          this.changeInputError("loginId", "");
          this.changeInputError("password", "");
          this.changeInputError("roleId", "");
          this.changeInputError("type", "success");
          
          console.log("success data")
        }
      });
  };
  

  // console.log(this.state.form);

  render() {
    return (
      <>
        <center>
          <h2
            className="mb-5"
            style={{ marginTop: "65px", marginBottom: "3.rem" }}
          >
             {
          (() => {
            if (this.state.inputError.message) {
              return (
                <div>
                  <FormMessage type={this.getInputError("type")} error={this.getInputError("error")} message={this.getInputError('message')} />

                </div>
              )
            }
          })()
        }
         
            Student Registration
          </h2>
          <Form>
            <Form.Group className="mb-4" controlId="formBasicFristName">
              <Form.Control
                type="Text"
                name="firstName"
                value={this.state.form.firstName}
                onChange={this.Changestate}
                style={{ width: "25%" }}
                placeholder="firstName"
              />
             < Formerror errorName={this.state.inputError.firstName}/>
            {/* <Formerror errorName={this.getInputError('firstName')}/> */}
            </Form.Group>
        

            <Form.Group className="mb-4" controlId="formBasicLastName">
              <Form.Control
                type="Text"
                name="lastName"
                value={this.state.form.lastName}
                onChange={this.Changestate}
                style={{ width: "25%" }}
                placeholder="LastName"
              />
               {this.state.inputError.lastName}
               {/* <Formerror errorName={this.getInputError('lastName')}/> */}
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicemail">
              <Form.Control
                type="email"
                name="loginId"
                value={this.state.form.loginId}
                onChange={this.Changestate}
                style={{ width: "25%" }}
                placeholder="Enter loginId "
              />
              {this.state.inputError.loginId}
              {/* <Formerror errorName={this.getInputError('loginId')}/> */}
            </Form.Group>

           

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                value={this.state.form.password}
               onChange={this.Changestate}
                style={{ width: "25%" }}
                placeholder="Password"
              />
              {/* <Formerror errorName={this.getInputError('password')}/> */}
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicMobileNo">
              <Form.Control
                type="number"
                name="roleId"
                value={this.state.form.roleId}
                onChange={this.Changestate}
                style={{ width: "25%" }}
                placeholder="Enter roleId"
                
              />
              {this.state.inputError.roleId}
              {/* <Formerror errorName={this.getInputError('roleId')}/> */}
            </Form.Group>

            <Button
              className="d-grid gap-2 col-3 mx-auto"
              onClick={this.save}
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </center>
      </>
    );
  }
}
