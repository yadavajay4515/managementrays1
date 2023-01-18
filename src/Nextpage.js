import React, { Component } from 'react'
import Navbar2 from './component/Navbar2'
import {BrowserRouter as Router, Route,Routes} from "react-router-dom" ;
import Addstudent from './component/Addstudent';
import Studentlist from './component/Studentlist';
import Addmarksheet from './component/Addmarksheet'
import MarkSheetList from './component/MarkSheetList'
import Collegedetails from './component/Collegedetails'
import Collegelist from './component/Collegelist'
import Addrole from './component/Addrole'
import Rolelist from './component/Rolelist'
import Adduser from './component/Adduser'
import Userlist from './component/Userlist'


export default class Nextpage extends Component {
  render() {
    return (
      <>
      <Router>
        <Navbar2/>
        <div>
          <Routes>
          {/* <Route path='/login' element={<Login/>} /> */}
         <Route path='/addstudent' element={<Addstudent/>}/>
         <Route path='/studentlist' element={<Studentlist/>}/>

         <Route path='/addmarksheet' element={<Addmarksheet/>}/>
         <Route path='/markSheetlist' element={<MarkSheetList/>}/>

         <Route path='/collegedetails' element={<Collegedetails/>}/>
         <Route path='/collegelist' element={<Collegelist/>}/>

         <Route path='/addrole' element={<Addrole/>}/>
         <Route path='/rolelist' element={<Rolelist/>}/>

         <Route path='/adduser' element={<Adduser/>}/>
         <Route path='/userlist' element={<Userlist/>}/>
          </Routes>
        </div>
   
        
      </Router>
   
      </>
    )
  }
}
