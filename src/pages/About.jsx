
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Users from '../Data/Users.json'
import "../components/About.css";
 
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
      


  <div className="row row-cols-5 row-cols-md-5">
    {Users.map((users)=>
  
    <div className='col-12 col-md-6 col-lg-4'>
      <div className="section">
        <div class="card"  >
          <img className='col-lg-4 col-md-4 col-sm-4'src={users.photo} alt={users.name}  style={{ width: 270, height: 300 }} class="card-img-top" />
        <div class="card-body"> 
        <h5 class="card-title">{users.name}</h5>
        <p class="card-text">{users.title}</p>
      </div>
    </div>
  </div>
</div>


    )}
    </div>
  </div>
   
  );
}

export default About;
