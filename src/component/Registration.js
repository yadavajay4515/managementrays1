import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Base from "./Base";
import axios from "axios";
export default class Registration extends Base {
  constructor() {
    super();

    this.state = {
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
        }
        else{
          console.log("success daata")
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
         
            Student Registration
          </h2>
          <Form>
            <Form.Group className="mb-4" controlId="formBasicFristName">
              <Form.Control
                type="Text"
                name="firstName"
                value={this.state.form.firstName}
                onChange={this.changeFormState}
                style={{ width: "25%" }}
                placeholder="firstName"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicLastName">
              <Form.Control
                type="Text"
                name="lastName"
                value={this.state.form.lastName}
                onChange={this.changeFormState}
                style={{ width: "25%" }}
                placeholder="LastName"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicemail">
              <Form.Control
                type="email"
                name="loginId"
                value={this.state.form.loginId}
                onChange={this.changeFormState}
                style={{ width: "25%" }}
                placeholder="Enter loginId "
              />
            </Form.Group>

           

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                value={this.state.form.password}
                onChange={this.changeFormState}
                style={{ width: "25%" }}
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicMobileNo">
              <Form.Control
                type="number"
                name="roleId"
                value={this.state.form.roleId}
                onChange={this.changeFormState}
                style={{ width: "25%" }}
                placeholder=" Enter roleId"
              />
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
