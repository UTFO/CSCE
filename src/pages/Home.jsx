import {
  faArrowCircleDown,
  faChevronCircleDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { IconContext } from 'react-icons';
import { LinkContainer } from 'react-router-bootstrap';
import '../App.css';
import EventHolder from '../components/EventHolder';
import './Home.css';

const Home = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="home">
      <div className="hero page-content">
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src="../assets/heropicture.svg"
                className="d-block mx-lg-auto img-fluid HeroImg"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>

            <div className="col-lg-6">
              <h1 className="display-5 lh-1 mb-3">Learn. Develop. Connect.</h1>
              <p className="lead">
                Welcome to the Canadian Society for Civil Engineers.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <LinkContainer to="/mentorship">
                  <button
                    type="button"
                    className="btn btn-success btn-lg px-4 me-md-2"
                  >
                    Become a Mentee!
                  </button>
                </LinkContainer>
                <LinkContainer to="/about">
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-lg px-4"
                  >
                    Learn More
                  </button>
                </LinkContainer>
              </div>
              <p className="pt-3 ">
                <a
                  className="fw-semibold d-flex align-items-center"
                  href="#events"
                  style={{ textDecoration: 'None', color: 'green' }}
                >
                  <IconContext.Provider>
                    Check out our upcoming events!
                    <FontAwesomeIcon
                      className="ps-2 btn-events"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      icon={hovered ? faArrowCircleDown : faChevronCircleDown}
                      size="2x"
                    />
                  </IconContext.Provider>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="spacer layer1"> </div>

      <a name="events">
        <div className="EventHolder text-white container-fluid">
          <div className="row">
            <h2 className="col text-center">Upcoming Events</h2>
          </div>
          <div className="row">
            <p className="col text-center">
              Check out some of our upcoming events
            </p>
          </div>
          <EventHolder />
        </div>
      </a>

      <div className="spacer layer2"></div>
    </div>
  );
};

export default Home;
