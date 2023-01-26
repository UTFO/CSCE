import { useState } from 'react';
import { Link } from 'react-router-dom';

const CSCENavbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 72) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <nav
      className={
        navbar
          ? 'navbar navbar-expand-lg bg-light py-3 fixed-top'
          : 'navbar navbar-expand-lg py-3 bg-transparent fixed-top'
      }
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          Home
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/mentorship" className="nav-link">
                Mentorship
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CSCENavbar;
