import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import './Navbar.css';

const CSCENavbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 110) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <Navbar
      className={navbar ? 'shadow-sm' : ''}
      bg={navbar ? 'light' : 'transparent'}
      variant="light"
      sticky="top"
      expand="lg"
    >
      <Container>
        <Navbar.Brand>
          <LinkContainer to="/">
            <img
              src={'../assets/LogoNoWords.png'}
              className={
                navbar ? 'NavLogoSmall img-fluid' : 'NavLogo img-fluid'
              }
            />
          </LinkContainer>
          <LinkContainer to="/">
            <img src = {'../assets/LogoWordsOnly.png'} className = {navbar ? 'logoWords img-fluid' : 'logoWordsDisabled img-fluid'}/>
          </LinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/mentorship">
              <Nav.Link>Mentorship</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CSCENavbar;
