import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default class Navbar2 extends Component {
  render() {
    return (
        <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Rays Mangement</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              
              <NavDropdown title="Add-Student" id="navbarScrollingDropdown">
                
                {/* <NavDropdown.Item href="/Addstuden" to="/addstudent"> Addstudent</NavDropdown.Item> */}
                
                <Link class="nav-link active" aria-current="page" href="" to="/addstudent">Addstudent</Link>
                <Link class="nav-link active" aria-current="page" href="" to="/studentlist">Studentlist</Link>
                {/* <NavDropdown.Item href="#action4">StudentList</NavDropdown.Item> */}
               </NavDropdown>

               <NavDropdown title="Addmarksheet" id="navbarScrollingDropdown">
               <Link class="nav-link active" aria-current="page" href="" to="/addmarksheet">Addmarksheet</Link>
                <Link class="nav-link active" aria-current="page" href="" to="/markSheetlist">MarkSheet List</Link>
            
                {/* <NavDropdown.Item href="#action3"> Addmarksheet</NavDropdown.Item>
                <NavDropdown.Item href="#action4">MarkSheet List</NavDropdown.Item> */}
               </NavDropdown>

               <NavDropdown title="College" id="navbarScrollingDropdown">
               <Link class="nav-link active" aria-current="page" href="" to="/collegedetails">College details</Link>
                <Link class="nav-link active" aria-current="page" href="" to="/collegelist">College list</Link>
                {/* <NavDropdown.Item href="#action3"> College details</NavDropdown.Item>
                <NavDropdown.Item href="#action4">College list</NavDropdown.Item> */}
               </NavDropdown>

               <NavDropdown title="Role" id="navbarScrollingDropdown">
               <Link class="nav-link active" aria-current="page" href="" to="/addrole"> Addrole</Link>
                <Link class="nav-link active" aria-current="page" href="" to="/rolelist">Rolelist</Link>
                {/* <NavDropdown.Item href="#action3"> Addrole</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Rolelist</NavDropdown.Item> */}
               </NavDropdown>

               <NavDropdown title=" User" id="navbarScrollingDropdown">
               <Link class="nav-link active" aria-current="page" href="" to="/adduser">Adduser</Link>
                <Link class="nav-link active" aria-current="page" href="" to="/userlist">Userlist</Link>
                {/* <NavDropdown.Item href="#action3"> Adduser</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Userlist</NavDropdown.Item> */}
               </NavDropdown>
              
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
