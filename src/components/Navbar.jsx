/* eslint-disable prettier/prettier */
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logoSvg from '../assets/logo.svg';
import './Navbar.css';

const CSCENavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">
        <img src={logoSvg} alt="CSCE" className="logo"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" id="Navbar">
          <Link to="/" className="navLink">
            Home
          </Link>
          <Link to="/about" className="navLink">
            About
          </Link>
          <Link to="/contact" className="navLink">
            Contact
          </Link>
          <Link to="/events" className="navLink">
            Events
          </Link>
          <Link to="/mentorship" className="navLink">
            Mentorship
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CSCENavbar;
