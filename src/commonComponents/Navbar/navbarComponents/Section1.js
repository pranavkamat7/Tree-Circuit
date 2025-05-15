import React from 'react'
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../../../../src/Styles/navbar.module.css'

function Section1() {
  return (
   <>
      <Navbar className = {styles.main_navbar}>
        <Container>
          <div className={styles.wrapper_div}>
          <Navbar.Brand href="/" ><img src='/Logo.jpg' alt='WebsiteLogo' height='50px' width='50px' /></Navbar.Brand>
          <Nav className="">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="/contact-us">Contact</Nav.Link>
          </Nav>
          </div>
        </Container>
      </Navbar>
      
    </>
  );
}


export default Section1
