// import React, { Component } from 'react'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Base from './Base';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Collegelist extends Base {
  constructor(){
    super();
    this.state={
      inputError:{

      },
      name:"",
      phoneNo:"",
      list:[]

    }
    this.search();
  }
  search(){
    axios.post("http://api.sunilos.com:9080/ORSP10/College/search",this.state)
    .then((res)=>{
      console.log(res)
      this.setState({list:res.data.result.data})
    })
  }
  render() {
    return (
      <div>
    <center>
    <Row className="g-2">
      <Col md>
   <Form.Control  
   type="number" 
   style={{width:"200px",marginLeft:"325px",marginTop:"41px"}}
   onChange={this.changeState1}
   name="phoneNo"
   value={this.state.phoneNo}
    placeholder="phoneNo"/>
   
     </Col>
      <Col md>
   <Form.Control 
   type="Text"
   style={{width:"200px", marginLeft:"-650px",marginTop:"41px"}} 
   name="name"
   value={this.state.name}
   onChange={this.changeState1}
    placeholder="name" />
     <Button  variant="primary" 
     onClick={(event)=>this.search(event)}
     style={{marginTop:"-65px",marginLeft:"-300px"}}>Primary</Button>{' '}
      </Col>
    
    </Row>
    </center>
    <Table striped bordered hover size="sm" style={{marginTop:"50px"}}>
      <thead>
         <tr>
           <th scope="col">id</th>

           <th scope="col">Name</th>
            <th scope="col">PhoneNo</th>
            <th scope="col">Address</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit</th>
            
       </tr>
      </thead>
      <tbody>
        {
          this.state.list.map((ele,id)=>(
            <tr>
              <td>{id}</td>
              <td>{ele.name}</td>
              <td>{ele.phoneNo}</td>
              <td>{ele.address}</td>
              <td>{ele.city}</td>
              <td>{ele.state}</td>
              
              <td>
                <Button>Delete</Button>
               
              </td>
              {/* <td> <Link  to={'/collegedetails/'+ ele.id}>Edit</Link></td> */}
              <td><Link  to={'/collegedetails/' + ele.id}>Edit</Link></td>
            </tr>

))
        }

       
       </tbody>
    </Table>
      
        
      </div>
    )
  }
}
