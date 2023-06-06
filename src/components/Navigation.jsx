import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();
  console.log(location);

  let fixedNavStyle = '';
  console.log(location.pathname);

  if (location.pathname === '/about') {
    fixedNavStyle += 'dark';
  }

  useEffect(() => {
    const changeNav = () => {
      if (navbar && !window.scrollY) setNavbar(false);
      else if (!navbar && window.scrollY) setNavbar(true);
    };
    window.addEventListener('scroll', changeNav, { passive: true });

    return () => {
      window.removeEventListener('scroll', changeNav, { passive: true });
    };
  }, [navbar]);

  return (
    <Navbar
      className={navbar ? 'Navbar shadow solid' : 'Navbar transparent'}
      bg={navbar ? 'light-subtle' : ''}
      variant={navbar ? '' : fixedNavStyle}
      fixed="top"
      expand="lg"
    >
      <Container>
        <Navbar.Brand>
          <LinkContainer to="/">
            <img
              src={'./assets/logoCroppedWhiteFilled.svg'}
              className={
                navbar ? 'NavLogoSmall img-fluid' : 'NavLogo img-fluid'
              }
            />
          </LinkContainer>
          <LinkContainer to="/">
            <img
              src={'../assets/LogoWordsOnly.png'}
              className={
                navbar ? 'logoWordsDisabled img-fluid' : 'logoWords img-fluid'
              }
            />
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

export default Navigation;
