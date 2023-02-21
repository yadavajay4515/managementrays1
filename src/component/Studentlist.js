// import React, { Component } from 'react'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Base from './Base';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Studentlist extends Base {
  constructor(){
    super();
    this.state={
      // form:{
      //   collegeId: "",
      //   email:""

      // },
    
      inputError:{
        message:"",
        error:"",
      },
       id:"",
        firstName: "",
        lastName: "",
        collegeId: "",
        mobileNo: "",
        email:"",
        list:[],
      
      
    }
    this.search();
  }
  search=(e)=>{
    // e.preventDefault();
    axios.post("http://api.sunilos.com:9080/ORSP10/Student/search/",this.state)
    .then((res)=>{
      console.log(res)
      this.setState({ list: res.data.result.data });
                
    })
  }
  delete(id){
    let url= "http://api.sunilos.com:9080/ORSP10/Student/delete/"+id;
    axios.get(url)
    .then(()=>{
      
this.changeInputError("message"," delete success fully")
this.search();
    })
  }
  render() {
    return (
      <div>
      <center>
    <Row className="g-2">
      <Col md>
   <Form.Control  
   type="email" 
   style={{width:"200px",marginLeft:"325px",marginTop:"41px"}}
   onChange={this.changeState1}
   name="collegeId"
   value={this.state.collegeId}
    placeholder="Search by collegeId"/>
   
     </Col>
      <Col md>
   <Form.Control 
   type="email"
   style={{width:"200px", marginLeft:"-650px",marginTop:"41px"}} 
   name="email"
   value={this.state.email}
   onChange={this.changeState1}
    placeholder="Search by email" />
     <Button  variant="primary" 
     onClick={this.search}
     style={{marginTop:"-65px",marginLeft:"-300px"}}>Primary</Button>{' '}
      </Col>
    
    </Row>
    </center>
    <Table striped bordered hover size="sm" style={{marginTop:"50px"}}>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>CollegeId</th>  
          <th>mobileNo</th>
          <th>Delete</th>
          <th>Edit</th>
          
        </tr>
      </thead>
      <tbody>

        {this.state.list.map((ele,id)=>(
          <tr key={id}>
          <td>{id+1}</td>
          <td>{ele.firstName}</td>
          <td>{ele.lastName}</td>
          <td>{ele.email}</td>
          <td>{ele.collegeId}</td>
          <td>{ele.mobileNo}</td>
          <td> <Button  onClick={(event) => this.delete(ele.id)} variant="primary"
           >Delete</Button></td>
          <td><Link  to={'/addstudent/' + ele.id}>Edit</Link></td>
        </tr>

        ))}
       </tbody>
    </Table>



    </div>
    
    
    )
  }
}
