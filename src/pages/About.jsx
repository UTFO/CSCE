
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Users from '../Users.json'
import "../components/About.css";
import 'font-awesome/css/font-awesome.min.css';
import { FaInstagram ,FaFacebook} from "react-icons/fa";

function About() {
 
  return (
    
    <div className="background">
      
      <br/>      

        <h1 className="titles">
          About us 
        </h1>

        <h3 className="titles"> 
        We are a networking club for civil engineering students. 
        We help students discover different career paths by connecting students to mentors in the industry,
         hosting panels about different fields in civil engineering, hold skills workshops, and help run career fair
        </h3>
        
      <br/>
      <br/>

      <h2 className="titles"> Meet The Team </h2>

      <br>
      </br>
      
  <div class="row row-cols-5 row-cols-md-5">

    {Users.map((users)=>
        <Container className="section">

            <Card style={{ width: '17rem' }}>
             <Card.Img style={{ width: 270, height: 300 }} variant="top" src={users.photo}/>
            <Card.Body>
            <Card.Title>{users.name}</Card.Title>
            <Card.Subtitle>{users.title}</Card.Subtitle>

          </Card.Body>
          <br></br>

        </Card>
  </Container>
    )}
  </div>
      <br></br>


    
    </div>

   
  );
}

export default About;