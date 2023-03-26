import { LinkContainer } from 'react-router-bootstrap';
import '../App.css';
import EventHolder from '../components/EventHolder';
import Events from '../data/Events.json';
import {BsFillArrowDownCircleFill} from 'react-icons/bs'
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="hero">
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
              <h1 className="display-5 fw-bold lh-1 mb-3">
                Learn. Develop. Connect.
              </h1>
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
              <button
                    type="button"
                    className="btn btn-events btn-success btn-lg px-4 me-md-2"
                  >
                  <a href="#events" style={{textDecoration : 'None'}}>
                    Check out our featured events below! <BsFillArrowDownCircleFill />
                    </a>
                  </button>
            </div>
          </div>
        </div>
      </div>

      <div className="spacer layer1"></div>
      <a name = 'events'>
      <div className="EventHolder">
        <div style={{ textAlign: 'center', paddingTop: 20 }}>
          <h2 className="EventHolderTitle">Upcoming Events</h2>
          <p
            className="EventHolderTitle"
            style={{
              paddingTop: 0,
              paddingBottom: 0,
              paddingRight: '1em',
              paddingLeft: '1em',
              marginBottom: 0,
            }}
          >
            Check out some of our upcoming events
          </p>
        </div>
        <EventHolder />
      </div>
      </a>
      {/* <div>
        <img className="Landscape" src={LandscapeSvg} alt="Landscape" />
      </div> */}
      <div className="spacer layer2"></div>
    </>
  );
};


export default Home;
