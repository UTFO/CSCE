import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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


      <h2>&nbsp;Members </h2>
      <br>
      </br>
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
    <br/>
      <Card style={{ width: '18rem',flex:1. }}>
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
    <br/>
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
    <br/>

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


      <h3> Address</h3>


    </div>
  );
}

export default About;