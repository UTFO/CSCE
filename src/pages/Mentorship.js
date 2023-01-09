import "../components/About.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { FaInstagram ,FaFacebook} from "react-icons/fa";


function Mentorship (){
    return (

        <div className="mentor_background" >

            <br/>
            <h1 className="titles">Get in touch with us </h1>
            
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfI-9iRW-o_zewKhAqz5yD1UA9vp7w98QZu00H8jUE_RTN77w/viewform?embedded=true" width="640" height="948" frameborder="10" marginheight="0" marginwidth="10">Loading…</iframe>   

            <h2 className="movement" >
                Follow us on social media 
                <br/>
            </h2>

            <div className="movement"> 
                <a href="https://www.instagram.com/csce.uoft/?hl=en">
                    <FaInstagram size={50}/> 
                
                </a >

                <a href="https://www.facebook.com/CSCEUofT/">
                    <FaFacebook size={47}/>    
                </a>
            </div>

        </div>
    );
}

export default Mentorship;