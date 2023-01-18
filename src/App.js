
import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom" ;
import Navbar from "./component/Navbar";
import Registration from "./component/Registration";
import Login from "./component/Login";
class App extends React.Component{
  
  render(){
    return( 
      <>
      
       <Router>
         <Navbar/>
          <Routes>
              <Route path='/login' element={<Login/>} />
              <Route path='/Registration' element={<Registration/>} />

          </Routes>


      </Router>
      
     </>
    )
    
  }
}
export default App;

