import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
//const About = () => {
  //  return (
  //      <h1>This is the about page</h1>
 //   );
//}

function About() {
 
  return (
    <div className="About">
 
        <h1>&nbsp;About us </h1>
        <h3> &nbsp; The Canadian Society of Civil Engineers at the University of Toronto is an organization aiming to <br/> say gather together 
        
        civil engineers across Toronto. Our aim is to sigma alpha gama beta sigma lol </h3>
        
      <br/>
      <br/>


      <h2 >&nbsp; Our team </h2>
      <br>
      </br>
      <Container>
      <Row xs={2} md={2} className="g-4">
        {Array.from({length:6}).map((_,idx)=>(
        <Col>

        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Name</Card.Title>
        <Card.Subtitle>Member</Card.Subtitle>

        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">LinkedIn</Card.Link>
        <Card.Link href="#">GitHub</Card.Link>
      </Card.Body>
    </Card>
        </Col>
        ))}
      </Row>
      </Container>
      
      
      

    </div>
  );
}

export default About;