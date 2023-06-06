import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import './Mentorship.css';

function Mentorship() {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const changeNav = () => {
      if (navbar && !window.scrollY) setNavbar(false);
      else if (!navbar && window.scrollY) setNavbar(true);
    };
    window.addEventListener('scroll', changeNav, { passive: true });

    return () => {
      window.removeEventListener('scroll', changeNav, { passive: true });
    };
  }, [navbar]);
  return (
    <section className="mentor mentorship">
      <Container>
        <Row>
          <Col lg={6}>
            <Card className="textcard shadow-lg">
              <Card.Body>
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
                  If you're interested in joining the program as a mentee,
                  please fill out the form. We will be in touch with more
                  information soon.
                </p>
                <p>We look forward to connecting with you.</p>
                <Image
                  className="img-fluid"
                  src="./assets/industrymixer.jpg"
                  rounded
                />
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <iframe
              className=""
              src="https://docs.google.com/forms/d/e/1FAIpQLSfI-9iRW-o_zewKhAqz5yD1UA9vp7w98QZu00H8jUE_RTN77w/viewform?embedded=true"
              style={{
                width: '100%',
                height: '3250px',
              }}
            >
              Loading…
            </iframe>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Mentorship;
