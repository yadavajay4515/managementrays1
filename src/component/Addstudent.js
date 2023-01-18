import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default class Addstudent extends Component {
  render() {
    return (
      <center> 
      <h2  className="mb-5" style={{marginTop:"65px", marginBottom:"3.rem"}}> AddStudent</h2>
      <Form >
     
      <Form.Group className="mb-4" controlId="formBasicFristName">
       <Form.Control type="Text"  style={{width:"25%"}} placeholder="FristName" />
     </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicLastName">
        <Form.Control type="Text" style={{width:"25%"}} placeholder="LastName" />
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicemail">
        <Form.Control type="email" style={{width:"25%"}} placeholder="Email id" />
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicMobileNo">
        <Form.Control type="number" style={{width:"25%"}} placeholder="Enter the number" />
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicCollegeid">
        <Form.Control type="number" style={{width:"25%"}} placeholder="Collegeid" />
      </Form.Group>
 
      <Button className="d-grid gap-2 col-3 mx-auto"  variant="primary"type="submit">Submit</Button>
    </Form> 
    </center>
    )
  }
}
