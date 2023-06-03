import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Mentorship.css';

function Mentorship() {
  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col lg={6}>
            <h2>Industry Mentorship Program</h2>
            <p>
              Our goal is to foster effective mentor-mentee relationships
              between UofT civil engineering students and industry
              professionals. This is a valuable opportunity to gain insights
              into the real-world application of civil engineering across a
              variety of sectors.
            </p>
            <p>
              Our mentors come from diverse civil engineering sectors,
              including:
            </p>
            <ul>
              <li>
                <strong>Transportation Engineering</strong>
              </li>
              <li>
                <strong>Structural Engineering</strong>
              </li>
              <li>
                <strong>Construction Engineering</strong>
              </li>
              <li>
                <strong>Land Development</strong>
              </li>
              <li>
                <strong>Project Management</strong>
              </li>
              <li>...and more</li>
            </ul>
            <p>
              If you're interested in joining the program as a mentor or mentee,
              please fill out the form. We will be in touch with more
              information soon.
            </p>
            <p>We look forward to connecting with you.</p>
          </Col>
          <Col lg={6}>
            <iframe
              className="form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSfI-9iRW-o_zewKhAqz5yD1UA9vp7w98QZu00H8jUE_RTN77w/viewform?embedded=true"
              style={{
                width: '100%',
                height: '3250px',
                frameborder: '0',
                marginheight: '0',
                marginwidth: '0',
              }}
            >
              Loading…
            </iframe>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Mentorship;
