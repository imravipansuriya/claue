import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom';
import { IoMdLogIn } from '@react-icons/all-files/io/IoMdLogIn';
import { AiOutlineShoppingCart } from '@react-icons/all-files/ai/AiOutlineShoppingCart';

import "./Navbar.css"


function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home" className='brand-icon'>
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav-menu">
            <Link to="/">Home</Link>
            <Link to="/Fashion">Fashion</Link>
            <Link to="/Grocery">Grocery</Link>
            <Link to="/Electronics">Electronics</Link>
          </Nav>
          <Nav className='nav-right-icons'>
            <Link to="/">
              <IoMdLogIn />
            </Link>
            <Link to="/"> 
              <AiOutlineShoppingCart />
            </Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;