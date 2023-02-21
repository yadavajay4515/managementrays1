import axios from 'axios';

import Base from './Base'

import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

export default class MarkSheetList extends Base {
  constructor(){
    super();
    this.state={
      
        name: "",
       chemistry:"",
        studentId:"",
        maths:"",
        physics:"",
        rollNo:"",
        list:[]

      }
    
    this.search();
  }
  search=()=>{
    axios.post("http://api.sunilos.com:9080/ORSP10/Marksheet/search",this.state)
    .then((res)=>{
      console.log(res)
      this.setState({list:res.data.result.data});
})
  }
  delete(id){
    axios.get("http://api.sunilos.com:9080/ORSP10/Marksheet/delete/"+id)
    .then(()=>{
      this.changeInputError("message","delete data")
    })
  }
  render() {
    return (
      <div>
      <center>
    <Row className="g-2">
      <Col md>
   <Form.Control  
   type="text" 
   style={{width:"200px",marginLeft:"325px",marginTop:"41px"}}
   onChange={this.changeState1}
   name="studentId"
   value={this.state.studentId}
    placeholder="Search by studentId"/>
   
     </Col>
      <Col md>
   <Form.Control 
   type="Text"
   style={{width:"200px", marginLeft:"-650px",marginTop:"41px"}} 
   name="rollNo"
   value={this.state.rollNo}
   onChange={this.changeState1}
    placeholder="Search by rollno" />
     <Button  variant="primary" 
     onClick={this.search}
     style={{marginTop:"-65px",marginLeft:"-300px"}}>search</Button>{' '}
      </Col>
    
    </Row>
    </center>
    <Table striped bordered hover size="sm" style={{marginTop:"50px"}}>
      <thead>
        <tr>
          <th>Id</th>
          <th>rollNo</th>
          <th>Name</th>
          <th>chemistry</th>
          <th>Physics</th>  
          <th>Maths</th>
          <th>studentId</th>
          <th>Delete</th>
          <th>Edit</th>
          
        </tr>
      </thead>
      <tbody>
        {
          this.state.list.map((ele,id)=>(
            <tr >
              <td>{id+1}</td>
              <td>{ele.rollNo}</td>
              <td>{ele.name}</td>
              <td>{ele.chemistry}</td>
              <td>{ele.physics}</td>
              <td>{ele.maths}</td>
              <td>{ele.studentId}</td>
              <td> <Button variant="primary" onClick={()=>this.delete(ele.id)}> Delete</Button></td>
              <td>  <Link   to={'/addmarksheet/' + ele.id}>Edit</Link> </td>
            
            </tr>

          ))
        }
    

        {/* {this.state.list.map((ele,id)=>(
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

        ))} */}
       </tbody>
    </Table>



    </div>

        
      
    )
  }
}
