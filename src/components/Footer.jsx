import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="p-5 bg-dark text-white text-center position-relative">
      <div className="container">
        <div className="row">
          <div className="col-11 d-flex align-items-center">
            <img
              className="img-fluid"
              src="../assets/Logo2.png"
              height="64"
              width="64"
            />
            &nbsp; &copy; 2023 CSCE University of Toronto Student Branch
          </div>
          <div className="col-1 d-flex align-items-center justify-content-evenly icons">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
