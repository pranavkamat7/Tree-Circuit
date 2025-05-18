import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import styles from '../../../../src/Styles/navbar.module.css';

function Section1() {
  return (
    <>
      <Navbar expand="lg" className={styles.main_navbar}>
        <Container>
          <Navbar.Brand href="/">
            <img src="/Logo.jpg" alt="WebsiteLogo" height="50px" width="50px" />
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" >
              <Nav.Link href="/" style={{color:'white',fontSize:'18px'}}>Home</Nav.Link>
              <Nav.Link href="/about" style={{color:'white',fontSize:'18px'}}>About</Nav.Link>
              <Nav.Link href="/our-team" style={{color:'white',fontSize:'18px'}}>Our Team</Nav.Link>
            </Nav>
            <Nav className="ms-auto" style={{alignItems:'center'}}>
                <Nav.Link href="/contact-us" style={{color:'white',border:'2px solid white',fontSize:'18px',width:'150px'}}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  );
}

export default Section1;
