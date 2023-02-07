import { FaFacebook, FaInstagram } from 'react-icons/fa';
import './Mentor.css';

function Mentorship() {
  return (
    <div className="mentor_background">
      <br />
      <h1 className="titles">Get in touch with us </h1>
      <p className="center">
        <iframe
          className="form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfI-9iRW-o_zewKhAqz5yD1UA9vp7w98QZu00H8jUE_RTN77w/viewform?embedded=true"
          width="640"
          height="948"
          frameBorder="10"
          marginHeight="0"
          marginWidth="10"
        >
          Loading…
        </iframe>
      </p>

      <h2 className="center">
        Follow us on social media
        <br />
      </h2>

      <div className="center">
        <p>
          <a href="https://www.instagram.com/csce.uoft/?hl=en">
            <FaInstagram class="icon" size={50} />
          </a>

          <a href="https://www.facebook.com/CSCEUofT/">
            <FaFacebook class="icon" size={47} />
          </a>
        </p>
      </div>
    </div>
  );
}

export default Mentorship;
