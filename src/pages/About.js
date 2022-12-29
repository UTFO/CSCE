import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import "../components/About.css";
//const About = () => {
  //  return (
  //      <h1>This is the about page</h1>
 //   );
//}

function About() {
 
  return (
    <div className="background">
      <br/>      
      <img   className="center" style={{ width: "25%", height: "25%" }} src="https://scontent.fyyz1-2.fna.fbcdn.net/v/t39.30808-6/243755651_361430918858134_4228657768685031891_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gaY3JYK2wiwAX8dwHmd&tn=iWamYZP-4P1nk8WD&_nc_ht=scontent.fyyz1-2.fna&oh=00_AfC3hes3VmGblW5yNkxEFKx4eMNFrvoG7QbEU5_U9IN72w&oe=63B0CC8B"/>

        <h1 className="titles">
          About us 
        </h1>

        <h3 className="titles"> The Canadian Society of Civil Engineers at the University of Toronto is an organization aiming to <br/> say gather together         
        civil engineers across Toronto. Our aim is to sigma alpha gama beta sigma lol </h3>
        
      <br/>
      <br/>

      <h2 className="titles"> Meet The Team </h2>

      <br>
      </br>
      
      <article className="section">
      <Container className="section">
        <div>
        <Row xs={3} md={3} className="g-4">
        {Array.from({length:6}).map((_,idx)=>(
        <Col className="section">

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://scontent.fyyz1-2.fna.fbcdn.net/v/t39.30808-6/243755651_361430918858134_4228657768685031891_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gaY3JYK2wiwAX8dwHmd&tn=iWamYZP-4P1nk8WD&_nc_ht=scontent.fyyz1-2.fna&oh=00_AfC3hes3VmGblW5yNkxEFKx4eMNFrvoG7QbEU5_U9IN72w&oe=63B0CC8B" />
        <Card.Body>
        <Card.Title>Name</Card.Title>
        <Card.Subtitle>Member</Card.Subtitle>

        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png">
          <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" style={{ width: "20%", height: "20%" }}/>
          
        </Card.Link>
        <Card.Link href="#">
        <img src="https://www.maryville.edu/wp-content/uploads/2015/11/Linkedin-logo-1-550x550-300x300.png" style={{ width: "20%", height: "20%" }}/>

        </Card.Link>
      </Card.Body>
    </Card>
        </Col>
        ))}
      </Row>
        </div>
      
      </Container>
      </article>

    </div>
  );
}

export default About;