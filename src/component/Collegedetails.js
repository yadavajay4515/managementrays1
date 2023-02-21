import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Base from './Base';
import axios from 'axios';
import withRouter from './withRouter';

 class Collegedetails extends Base {
  constructor(props){
    super(props);
    this.state={
      inputError:{
          message:"",
           address: "",
            city: "",
            name: "",
            state:"",
            phoneNo: ""
        
      },
      form:{
        address: "",
        city: "",
        name: "",
        state:"",
        phoneNo: ""
      },

    }
    if (this.props.params.pid) {
      this.editlist();
    }
    // if(this.props.params.cid){
    //   this.getdata();

    // }
  }
  reset(){
    this.setState({
      message:"",
      address: "",
       city: "",
       name: "",
       state:"",
       phoneNo: ""
   
    })
  }
  save=(e)=>{
    e.preventDefault();
   axios.post("http://api.sunilos.com:9080/ORSP10/College/save",this.state.form)
   .then((res)=>{
    if(res.data.result.inputerror){
      this.setState({inputError:res.data.result.inputerror})
    }
    else( 
       this.changeInputError("message","Register successfully")
    )
   })
  }
  // getdata(){
  //   let id= this.props.params.pid
  //     axios.get("http://api.sunilsos.com:9080/ORSP10/College/get/"+id)
  //     .then((res)=>{
  //       this.setState({form:res.data.result.data})

  //     })
  // }
  editlist(){
    let id= this.props.params.pid
   axios.get("http://api.sunilsos.com:9080/ORSP10/College/get/"+id)
   .then((res)=>{
    console.log(res)
    this.setState({form:res.data.result.data})

   })
  }
  render() {
    return (
      <center> 
      <h2  className="mb-5" style={{marginTop:"19px", marginBottom:"3.rem"}}> Collegedetails</h2>
      <Form >
        {this.state.inputError.message}
     
      <Form.Group className="mb-4" controlId="formBasicFristName">
       <Form.Control type="Text"value={this.state.form.name} 
        onChange={this.Changestate}
         name="name" 
        style={{width:"25%"}} 
        placeholder="name" />
        {this.state.inputError.name}
     </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicstate">
        <Form.Control type="Text"
         value={this.state.form.state} 
         name="state"
          onChange={this.Changestate}style={{width:"25%"}} 
          placeholder="state" />
          {this.state.inputError.state}
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasiccity">
        <Form.Control type="email" 
        value={this.state.form.city} 
        name="city" onChange={this.Changestate} 
        style={{width:"25%"}} 
        placeholder="city" />
        {this.state.inputError.city}
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasiccity">
        <Form.Control type="email" 
        value={this.state.form.address} 
        name="address" onChange={this.Changestate} 
        style={{width:"25%"}} 
        placeholder="address" />
        {this.state.inputError.address}
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicphoneNo">
        <Form.Control type="number" v
        laue={this.state.form.phoneNo} 
        name="phoneNo" onChange={this.Changestate}
         style={{width:"25%"}} placeholder="phoneNo" />

         {this.state.inputError.phoneNo}
      </Form.Group>
 
      <Button className="d-grid gap-2 col-3 mx-auto" onClick={this.save} variant="primary"type="submit">Submit</Button>
      <Button className="d-grid gap-2 col-3 mx-auto" onClick={(event)=>this.reset(event)} style={{marginTop:"10px"}} variant="primary"type="submit">reset</Button>

    </Form> 
    </center>
    )
  }
}
export default withRouter(Collegedetails);
