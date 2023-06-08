import { Col, Container, Image, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Employers.css';

const Employers = () => {
  const companies = [
    'Arup.jpg',
    'GHD.jpg',
    'IBIGroup.jpg',
    'MattamyHomes.jpg',
    'Ontario.jpg',
  ];

  return (
    <div className="employer">
      <Container className="employer-content pb-5">
        <Row className="employer-card shadow-lg justify-content-center mb-4 mt-3">
          <Col md={8} className="py-4">
            <h1 className="text-center mb-4">For Employers</h1>
            <p>
              At the University of Toronto's CSCE student branch, we are
              committed to fostering a strong relationship between the academic
              and professional civil engineering communities. We invite all
              employers in the civil industry to explore the opportunities for
              collaboration.
            </p>
            <p>
              We hold an annual mentorship program where we pair our civil
              engineering students with professionals in the field, providing
              students with valuable industry insights and creating a platform
              for knowledge exchange. We warmly welcome new employer
              partnerships for this program.
            </p>
            <p>
              In addition, we host a career fair every January, providing
              employers with a great opportunity to engage with our students,
              present their companies, and discuss potential career paths.
            </p>
            <p>
              To learn more about how you can get involved or to discuss
              partnership opportunities, please feel free to{' '}
              <LinkContainer to="/contact">
                <a>contact us</a>
              </LinkContainer>
            </p>
          </Col>
        </Row>
        <Row className="employer-card shadow-lg pt-3 justify-content-md-center">
          <p className="text-center mb-4">
            We are proud to have previously worked with these past employers:
          </p>
          {companies.map((company, idx) => (
            <Col key={idx} sm={12} md={5} lg={2} className="px-4 my-3">
              <Image
                src={`./assets/companies/${company}`}
                alt={company}
                className="company-img"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Employers;
