import React, { Fragment } from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarHeader = () => {
  return (
    <Fragment>

<Navbar expand="lg" className="HeaderNav">
<Container fluid>
<p className="fontHeader" >قائمة الطعام</p>
<Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="me-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
    </Nav>
    <form className="d-flex ">
    <input className="form-control me-2" type="search" placeholder="بحث ........" aria-label="Search" />
      <button className="btnSearch">بحت</button>
    </form>
  </Navbar.Collapse>
</Container>
</Navbar>

  </Fragment>
  )
}

export default NavbarHeader