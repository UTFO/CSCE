import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Users from '../Users.json'
import "../components/About.css";

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
      <h2 className="titles">
      
    For more information about our events, follow us in social media !

      </h2>

      <div className="titles">
      <a href="https://www.instagram.com/csce.uoft/?hl=en">
      <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" style={{ width: "5%", height: "5%" }}/>
      </a >
      
      <p> &nbsp;</p>

      <a href="https://www.facebook.com/CSCEUofT/">
      <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" style={{ width: "4.7%", height: "4.7%" }}/>
      </a>

      </div>
    
    </div>

   
  );
}

export default About;