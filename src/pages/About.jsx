import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FaInstagram, FaLinkedin, FaUser } from 'react-icons/fa';
import Users from '../data/Users.json';
import './About.css';

import ReactCardFlip from 'react-card-flip';

import React, { useState } from 'react';

function About() {
  const [flipped, setFlip] = useState(false);

  const filterExec = Users.filter((users) => users.id.includes('executive'));

  const filterAso = Users.filter((users) => users.id.includes('associate'));

  const test = (id, aux) => {
    let lists = [];
    for (let i = 0; i < aux.length; i++) {
      if (aux[i].index == id) {
        aux[id].flip = !flipped[id];
      } else {
        aux[i].flip = false;
      }
    }
    for (let i = 0; i < aux.length; i++) {
      lists.push(aux[i].flip);
    }
    setFlip(lists);
    console.log(aux);
  };
  var cards = document.querySelectorAll('.card');

  return (
    <div className="background about">
      <section id="about" className="px-5 py-2">
        <h1 className="titles">About us</h1>

        <h3 className="titles">
          We are a networking club for civil engineering students. We help
          students discover different career paths by connecting students to
          mentors in the industry, hosting panels about different fields in
          civil engineering, hold skills workshops, and help run career fair
        </h3>
      </section>

      <form className="title_form">
        <h2 className="accent left accent-left"> &nbsp;&nbsp;Executives</h2>
      </form>
      <label className="card-container" htmlFor="card-2">
        <div className="row row-cols-5 px-5 mx-5 px-5 ">
          {filterExec.map((user) => (
            <div className="col-12 col-md-6 col-lg-4 ">
              <div className="flip-card card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      className="card-image"
                      src={user.photo}
                      alt="Avatar"
                      style={{ width: 270, height: 350 }}
                    />
                    <div className="card-block">
                      <h4 className="card-title text-center">
                        {' '}
                        <br></br>
                        {user.name}
                      </h4>
                      <h6 className="card-subtitle mb-2 text-muted text-center">
                        {user.title}
                      </h6>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <h2> About me </h2>

                    <p>{user.about}</p>
                    <a href="https://www.linkedin.com/feed/">
                      {' '}
                      <FaLinkedin class="icon" size={47} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </label>
      <form className="title_form">
        <h2 className="accent left accent-left"> &nbsp;&nbsp;Associates</h2>
      </form>

      <div className="row row-cols-5 px-5 mx-5 px-5">
        {filterAso.map((user) => (
          <div className="col-12 col-md-6 col-lg-4 ">
            <div className="flip-card ">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={user.photo}
                    alt="Avatar"
                    style={{ width: 270, height: 350 }}
                  />
                  <div className="card-block">
                    <h4 className="card-title text-center">
                      <br></br>
                      {user.name}
                    </h4>
                    <h6 className="card-subtitle mb-2 text-muted text-center">
                      {user.title}
                    </h6>
                  </div>
                </div>
                <div className="flip-card-back">
                  <h2> About me </h2>

                  <p>{user.about}</p>
                  <a href="https://www.linkedin.com/feed/">
                    {' '}
                    <FaLinkedin class="icon" size={47} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
