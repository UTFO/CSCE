import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import './About.css';

import users from '../data/Users.json';

const About = () => {
  // An example list of members
  const members = users;

  const leadCards = members
    .filter((member) => member.role === 'Leadership')
    .map((member, index) => (
      <Col md={6} lg={4} key={index} className="mb-4">
        <Card className="h-100 member-card shadow text-white">
          <Image
            className="mx-4 mt-4 shadow-lg"
            src={member.imagePath}
            fluid
            roundedCircle
          />
          <Card.Body>
            <Card.Title>{member.name}</Card.Title>
            <Card.Subtitle className="mb-2 lead">
              <small>{member.position}</small>
            </Card.Subtitle>
            <Card.Subtitle className="lead">
              <small>{member.discipline}</small>
            </Card.Subtitle>
          </Card.Body>
          <Card.Body className="d-flex justify-content-center">
            {member.linkedin && (
              <Card.Link href={member.linkedin} className="icon-link">
                <FontAwesomeIcon icon={faLinkedin} color="white" />
              </Card.Link>
            )}
            {member.twitter && (
              <Card.Link href={member.twitter} className="icon-link">
                <FontAwesomeIcon icon={faTwitter} color="white" />
              </Card.Link>
            )}
            {member.website && (
              <Card.Link href={member.website} className="icon-link">
                <FontAwesomeIcon icon={faGlobe} color="white" />
              </Card.Link>
            )}
          </Card.Body>
        </Card>
      </Col>
    ));

  const execCards = members
    .filter((member) => member.role === 'Executive')
    .map((member, index) => (
      <Col md={6} lg={4} key={index} className="mb-4">
        <Card className="h-100 member-card shadow text-white">
          <Image
            className="mx-4 mt-4 shadow-lg"
            src={member.imagePath}
            fluid
            roundedCircle
          />
          <Card.Body>
            <Card.Title>{member.name}</Card.Title>
            <Card.Subtitle className="mb-2 lead">
              <small>{member.position}</small>
            </Card.Subtitle>
            <Card.Subtitle className="lead">
              <small>{member.discipline}</small>
            </Card.Subtitle>
          </Card.Body>
          <Card.Body className="d-flex justify-content-center">
            {member.linkedin && (
              <Card.Link href={member.linkedin} className="icon-link">
                <FontAwesomeIcon icon={faLinkedin} color="white" />
              </Card.Link>
            )}
            {member.twitter && (
              <Card.Link href={member.twitter} className="icon-link">
                <FontAwesomeIcon icon={faTwitter} color="white" />
              </Card.Link>
            )}
            {member.website && (
              <Card.Link href={member.website} className="icon-link">
                <FontAwesomeIcon icon={faGlobe} color="white" />
              </Card.Link>
            )}
          </Card.Body>
        </Card>
      </Col>
    ));

  const assocCards = members
    .filter((member) => member.role === 'Associate')
    .map((member, index) => (
      <Col md={6} lg={4} key={index} className="mb-4">
        <Card className="h-100 member-card shadow text-white">
          <Image
            className="mx-4 mt-4 shadow-lg"
            src={member.imagePath}
            fluid
            roundedCircle
          />
          <Card.Body>
            <Card.Title>{member.name}</Card.Title>
            <Card.Subtitle className="mb-2 lead">
              <small>{member.position}</small>
            </Card.Subtitle>
            <Card.Subtitle className="lead">
              <small>{member.discipline}</small>
            </Card.Subtitle>
          </Card.Body>
          <Card.Body className="d-flex justify-content-center">
            {member.linkedin && (
              <Card.Link href={member.linkedin} className="icon-link">
                <FontAwesomeIcon icon={faLinkedin} color="white" />
              </Card.Link>
            )}
            {member.twitter && (
              <Card.Link href={member.twitter} className="icon-link">
                <FontAwesomeIcon icon={faTwitter} color="white" />
              </Card.Link>
            )}
            {member.website && (
              <Card.Link href={member.website} className="icon-link">
                <FontAwesomeIcon icon={faGlobe} color="white" />
              </Card.Link>
            )}
          </Card.Body>
        </Card>
      </Col>
    ));

  return (
    <div className="about text-white">
      <Container className="mt-5">
        <Row className="mb-5">
          <Col className="member-card shadow">
            <h1>Who Are We?</h1>
            <p className="lead">
              We are the University of Toronto student-ran branch of the
              Canadian Society of Civil Engineers (CSCE). We are a networking
              club for civil engineering students! We help students discover
              different career paths by:
              <ul>
                <li>Connecting students to mentors in the industry.</li>
                <li>
                  Hosting panels about different fields in civil engineering.
                </li>
                <li>Holding skills workshops</li>
                <li>Running our club booth in career/club fairs.</li>
              </ul>
              ...and more!
            </p>
            <h2 className="display-6 text-center">Meet the Team!</h2>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col className="member-card shadow text-center">
            <h2>Leadership 🫅</h2>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">{leadCards}</Row>
        <Row className="mb-3">
          <Col className="member-card shadow text-end">
            <h2>🧑‍💼Executives</h2>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center ">{execCards}</Row>
        <Row className="mb-3">
          <Col className="member-card shadow ">
            <h2>Associates 👷</h2>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center ">{assocCards}</Row>
      </Container>
    </div>
  );
};

export default About;
