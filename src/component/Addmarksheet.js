
// import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Base from './Base';
import axios from 'axios';
import withRouter from './withRouter';

 class Addmarksheet extends Base{
  constructor(props){
    super(props);
    this.state={
      inputError:{
            message:"",
            name: "",
            chemistry:"",
            studentId:"",
            maths:"",
            physics:"",
            rollNo:"",

      },
      form:{
        name: "",
        chemistry:"",
        physics:"",
        studentId:"",
        maths:"",
        rollNo:"",
}
    }

    if (this.props.params.pid) {
      this.getdata();

    }
  }
  reset(){
    this.setState({
      message:"",
      name: "",
      chemistry:"",
      studentId:"",
      maths:"",
      physics:"",
      rollNo:"",

    })
  }
  save=(e)=>{
    e.preventDefault();
    axios.post("http://api.sunilos.com:9080/ORSP10/Marksheet/save",this.state.form)
    .then((res)=>{
      console.log(res);
      if(res.data.result.inputerror){
         this.setState({inputError:res.data.result.inputerror})
         this.changeInputError("name","Data save successfully")
      }
      else(
         this.changeInputError("message","Data save successfully")
        
         )

    })
  }
 
  getdata() {
    let id = this.props.params.pid;
    axios.get("http://api.sunilos.com:9080/ORSP10/Marksheet/get/" + id)
      .then((res) => {
        this.setState({ form: res.data.result.data });
      })
    }
  render() {
    return (
      <div>
        <center> 
      <h2  className="mb-5" style={{marginTop:"19px", marginBottom:"3.rem"}}> Addmarksheet</h2>
      <Form >
        {this.state.inputError.message}
     
      <Form.Group className="mb-4" controlId="formBasicFristName">
       <Form.Control type="Text"value={this.state.form.rollNo} 
        onChange={this.Changestate}
         name="rollNo" 
        style={{width:"25%"}} 
        placeholder="Enter roll no" />
        {this.state.inputError.rollNo}
     </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicLastName">
        <Form.Control type="Text"
         value={this.state.form.name} 
         name="name"
          onChange={this.Changestate}style={{width:"25%"}} 
          placeholder="Enter name" />
          {this.state.inputError.lastName}
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicemail">
        <Form.Control type="email" 
        value={this.state.form.chemistry} 
        name="chemistry" onChange={this.Changestate} 
        style={{width:"25%"}} 
        placeholder="Enter chemistry number" />
        {this.state.inputError.chemistry}
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicMobileNo">
        <Form.Control type="number"
        value={this.state.form.physics} 
        name="physics" onChange={this.Changestate} 
        style={{width:"25%"}} 
        placeholder="physics" />
        {this.state.inputError.physics}
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicMobileNo">
        <Form.Control type="number"
        value={this.state.form.maths} 
        name="maths" onChange={this.Changestate} 
        style={{width:"25%"}} 
        placeholder="maths" />
        {this.state.inputError.maths}
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicMobileNo">
        <Form.Control type="number"
        value={this.state.form.studentId} 
        name="studentId" onChange={this.Changestate} 
        style={{width:"25%"}} 
        placeholder="studentId" />
        {this.state.inputError.studentId}
      </Form.Group>

     
 
 
      <Button className="d-grid gap-2 col-3 mx-auto" onClick={this.save}  variant="primary"type="submit">Submit</Button>
      <Button className="d-grid gap-2 col-3 mx-auto" onClick={this.reset} style={{margin:"10px"}} variant="primary"type="submit">reset</Button>

    </Form> 
    </center>
      </div>
    )
  }
}
export default withRouter(Addmarksheet);
