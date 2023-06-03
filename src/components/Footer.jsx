import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className="spacer layer2"></div>
      <footer className="pb-3 bg-dark text-white text-center">
        <div className="container" style={{ maxWidth: '600px' }}>
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-12 d-flex align-items-center justify-content-center">
              <img
                className="img-fluid"
                src="../assets/Logo2.png"
                height="64"
                width="64"
              />
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 pt-3 d-flex align-items-center justify-content-center">
              &nbsp; &copy; 2023 CSCE University of Toronto Student Branch
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12 pt-3 d-flex align-items-center justify-content-center icons">
              <a
                href="https://www.instagram.com/csce.uoft/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="mx-2"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.facebook.com/CSCEUofT"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
            <div className="col-12 d-flex pt-3 align-items-center justify-content-center">
              Made with ❤️ by{' '}
              <a
                href="https://google.com"
                className="mx-1 custom-link"
                target="_blank"
                rel="noreferrer"
              >
                UTFO
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
