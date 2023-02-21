import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Base from './Base';
import axios from 'axios';
import withRouter from './withRouter';

 class Addstudent extends Base {
  constructor(props){
    super(props);
    this.state={
      inputError:{
      message:"",
      firstName: "",
      lastName: "",
      collegeId: "",
      mobileNo: "",
      email:""


      },
      form:{
      firstName: "",
      lastName: "",
      collegeId: "",
      mobileNo: "",
      email:""
      
    }
    }
    if (this.props.params.pid) {
      this.editlist();
    }
  }
  reset(){
    this.setState({
      message:"",
      firstName: "",
      lastName: "",
      collegeId: "",
      mobileNo: "",
      email:""
    })
  }
  save=(e)=>{
    e.preventDefault();
    axios.post("http://api.sunilos.com:9080/ORSP10/Student/save",this.state.form)
    .then((res)=>{
      console.log(res);
      if(res.data.result.inputerror){
        this.setState({inputError:res.data.result.inputerror})
      }
      else(
        this.changeInputError("message","Register successfully")
      )

    })
  }
  editlist(){
    let id= this.props.params.pid
   axios.get("http://api.sunilos.com:9080/ORSP10/Student/get/"+id)
   .then((res)=>{
    console.log(res)
    this.setState({form:res.data.result.data})

   })
  }
  render() {
    return (
      <center> 
      <h2  className="mb-5" style={{marginTop:"19px", marginBottom:"3.rem"}}> AddStudent</h2>
      <Form >
        {this.state.inputError.message}
     
      <Form.Group className="mb-4" controlId="formBasicFristName">
       <Form.Control type="Text"value={this.state.form.firstName} 
        onChange={this.Changestate}
         name="firstName" 
        style={{width:"25%"}} 
        placeholder="FristName" />
        {this.state.inputError.firstName}
     </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicLastName">
        <Form.Control type="Text"
         value={this.state.form.lastName} 
         name="lastName"
          onChange={this.Changestate}style={{width:"25%"}} 
          placeholder="LastName" />
          {this.state.inputError.lastName}
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicemail">
        <Form.Control type="email" 
        value={this.state.form.email} 
        name="email" onChange={this.Changestate} 
        style={{width:"25%"}} 
        placeholder="Email id" />
        {this.state.inputError.email}
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicMobileNo">
        <Form.Control type="number"
        value={this.state.form.mobileNo} 
        name="mobileNo" onChange={this.Changestate} 
        style={{width:"25%"}} 
        placeholder="Enter the number" />
        {this.state.inputError.mobileNo}
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicCollegeid">
        <Form.Control type="number" v
        laue={this.state.form.collegeId} 
        name="collegeId" onChange={this.Changestate}
         style={{width:"25%"}} placeholder="Collegeid" />

         {this.state.inputError.mobileNo}
      </Form.Group>
 
      <Button className="d-grid gap-2 col-3 mx-auto" onClick={this.save}  variant="primary"type="submit">Submit</Button>
      <Button className="d-grid gap-2 col-3 mx-auto" onClick={(event)=>this.reset(event)} style={{marginTop:"10px"}} variant="primary"type="submit">reset</Button>

    </Form> 
    </center>
    )
  }
}
export default withRouter(Addstudent);
