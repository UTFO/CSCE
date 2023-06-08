import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { LinkContainer } from 'react-router-bootstrap';
import RoleCard from '../components/RoleCard.jsx'; // import the RoleCard component
import './Join.css';

const Join = () => {
  const roles = [
    {
      role: 'President',
      description:
        'The role of president involves guiding the club in the correct direction in order to reach club goals, aiding the team to execute needed duties, writing club reports. They are responsible for acting as the aliason to CSCE national and regional and recruiting the executive team, associates and consultants.',
      eventKey: '0',
    },
    {
      role: 'VP Finance',
      description:
        'Submit funding applications and documents in accordance with the appropriate deadlines. Manages, tracks, and balances the chapter budget throughout the school year through tabulating revenue and expenses as accrued. Works alongside the VP External to create sponsorship packages and incentives with engineering companies.',
      eventKey: '1',
    },
    {
      role: 'VP Logistics',
      description:
        'Organizes logistics for events and chapter initiatives (e.g. room bookings, catering, audio/visual equipment). Ensures that chapter events are planned in a timely manner. Manages club assets and rentals (lockers, temporary office spaces, club merchandise). Supports President with event planning and other operational tasks.',
      eventKey: '2',
    },
    {
      role: 'VP Academia',
      description:
        'Manages an undergraduate research opportunity program with civil engineering professors. Increase familiarity and visibility of graduate studies and research to civil engineering at the University of Toronto. Organize an undergraduate and graduate research showcase.',
      eventKey: '3',
    },
    {
      role: 'Academics/Logistics Associate',
      description:
        'Supports VP Logistics. Supports VP Professional Development. Engage first-year civil engineering students with CSCE and professional development.',
      eventKey: '4',
    },
    {
      role: 'VP Professional Development',
      description:
        'Manage a mentorship program with current undergraduate students with civil engineering alumni. Works alongside the VP External to create events that best serve students’ professional development needs and outreach to civil engineering alumni. Works alongside President to organize a plan for the school year to reach certain milestones for each facet of civil engineering.',
      eventKey: '5',
    },
    {
      role: 'Mentorship Associate',
      description:
        'Support the VP Professional Development with organizing the mentorship program with current undergraduate students with civil engineering alumni.',
      eventKey: '6',
    },
    {
      role: 'VP Marketing',
      description:
        'Oversees all marketing operations of the chapter (eg. Event Promotion, Facebook, Instagram). Ensures all marketing materials and events (posters, online banners, class announcements, alerts, etc.) are released in a timely manner. Develops and implements a marketing strategy to increase communication and involvement between CSCE and the student body. Manage and maintain a new chapter website including current and archived events, chapter sponsors, etc.',
      eventKey: '7',
    },
    {
      role: 'Marketing Associate',
      description:
        'Support the VP Marketing by helping with the development of marketing materials (Instagram posts, Facebook event pages, Posters).',
      eventKey: '8',
    },
    {
      role: 'VP Community',
      description:
        'Organizes civil-based charity and goodwill events. Generates year-long student initiatives to increase community engagement. Brainstorms and implements fundraising events and opportunities.',
      eventKey: '9',
    },
    {
      role: 'Community Associate',
      description:
        'Support the VP Community by organizing civil-based charity and goodwill events to generate year-long student initiatives to increase community engagement. Engage first-year civil engineering students with CSCE and professional development.',
      eventKey: '10',
    },
  ];
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
              Applications: We typically recruit for new VPs and associates at
              the beginning of the school year. Any other recruitments
              throughout the year will be announced on our Instagram page. If
              you have any questions or inquiries, please feel free to{' '}
              <LinkContainer to="/contact">
                <a>contact us</a>
              </LinkContainer>
              .
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="mb-3 join-info">
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
