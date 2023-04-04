import React from 'react'
import './Navbar.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BiSearchAlt} from 'react-icons/bi';
import {BsFillCartPlusFill} from 'react-icons/bs';
// import NavDropdown from 'react-bootstrap/NavDropdown';
<style>
@import url('https://fonts.googleapis.com/css2?family=Alkatra&display=swap');
</style>
function Navbar1() {
  return (
    <Navbar  expand="lg" className='nav' >
      <Container fluid>
        <Navbar.Brand className='text-white fs-3' href="/">IBUY  <img src="https://thumbs.dreamstime.com/z/shopping-bag-logo-discount-concept-204397392.jpg" alt=""  width={"30px"} height={"30px"} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Form className="d-flex me-5 ms-5">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant=" text-white fs-4 outline-primary m-auto "><BiSearchAlt/></Button>
          </Form>
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='nav navbar' href="/SignUp">SignUp</Nav.Link>
            <Nav.Link className='nav navbar' href="/Login">LogIn</Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}

           <Nav.Link className='nav navbar navcart' href="/CartPage"><BsFillCartPlusFill/></Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>


  );
}

export default Navbar1;

