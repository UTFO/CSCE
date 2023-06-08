import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { LinkContainer } from 'react-router-bootstrap';
import RoleCard from '../components/RoleCard.jsx'; // import the RoleCard component
import Roles from '../data/Roles.json';
import './Join.css';

const Join = () => {
  const roles = Roles;
  return (
    <div className="mentor">
      <Container className="join pb-5">
        <Row>
          <Col className="join-info">
            <h1>Why Join?</h1>
            <p>
              By joining CSCE, members will be part of a highly motivated team
              of students striving to scale up CSCE’s impact on campus. Being an
              executive at CSCE UofT is not only a great way to give back to the
              Civil Engineering community, but also an opportunity to learn
              professional skills and gain valuable experience within a healthy
              team environment.
            </p>
            <p>
              <strong>Applications:</strong> We typically recruit for new VPs
              and associates at the beginning of the school year. Any other
              recruitments throughout the year will be announced on our
              Instagram page. If you have any questions or inquiries, please
              feel free to{' '}
              <LinkContainer to="/contact">
                <a>contact us</a>
              </LinkContainer>
              .
            </p>
            {/* <Carousel>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src="./assets/guestspeakers.jpg"
                  alt="First slide"
                  fluid
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src="./assets/industrymixer.jpg"
                  alt="Second slide"
                  fluid
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel> */}
          </Col>
        </Row>
        <Row>
          <Col className="mb-3 mt-3 join-info">
            <h2>Roles & Responsibilities:</h2>
            <Accordion className="join-info">
              {roles.map((role, index) => (
                <RoleCard
                  key={index}
                  role={role.role}
                  description={role.description}
                  eventKey={role.eventKey}
                />
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Join;
