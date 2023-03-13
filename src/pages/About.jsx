import Users from '../Data/Users.json';
import './About.css';

function About() {
  const filterExec = Users.filter((users) => users.id.includes('executive'));

  const filterAso = Users.filter((users) => users.id.includes('associate'));

  console.log(filterExec, filterAso);
  return (
    <div className="background">
      <section id="about" className="px-5 py-2">
        <div className="container">
          <h3 className="text-center">About CSCE UofT</h3>
          <p>
            We are a networking club for civil engineering students. We help
            students discover different career paths by connecting students to
            mentors in the industry, hosting panels about different fields in
            civil engineering, hold skills workshops, and help run career fair.
          </p>
        </div>
      </section>

      <h3 className="text-center">Meet the Team!</h3>

      <div className="title_form">
        <br></br>

        <form className="membertype">
          <h2 className="accent left accent-left"> Executives</h2>
        </form>
        <br></br>
        <input type="checkbox" id="card-2" />
        <label className="card-container" htmlFor="card-2">
          <div className="row row-cols-5 px-5 mx-5 px-5">
            {filterExec.map((user) => (
              <div className="col-12 col-md-6 col-lg-4 ">
                <div className="section">
                  <div className="card-flip">
                    <div className="card front" style={{ width: 270 }}>
                      <img
                        src={user.photo}
                        alt={user.name}
                        style={{ width: 270, height: 300 }}
                        className="card-img-top"
                      />

                      <div className="card-block">
                        <h4 className="card-title text-center">{user.name}</h4>
                        <h6 className="card-subtitle mb-2 text-muted text-center">
                          {user.title}
                        </h6>
                      </div>
                    </div>

                    <div className="card back" style={{ width: 300 }}>
                      <p className="card-text">{user.about}.</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </label>

        <br></br>

        <form className="membertype">
          <h2 className="accent left accent-left"> Associates</h2>
        </form>
        <br></br>
        <input type="checkbox" id="card-1" />
        <label className="card-container" htmlFor="card-1">
          <div className="row row-cols-5 px-5 mx-5 px-5">
            {filterAso.map((user) => (
              <div className="col-12 col-md-6 col-lg-4 ">
                <div className="section">
                  <div className="card-flip">
                    <div className="card front" style={{ width: 270 }}>
                      <img
                        src={user.photo}
                        alt={user.name}
                        style={{ width: 270, height: 300 }}
                        className="card-img-top"
                      />

                      <div className="card-block">
                        <h4 className="card-title text-center">{user.name}</h4>
                        <h6 className="card-subtitle mb-2 text-muted text-center">
                          {user.title}
                        </h6>
                      </div>
                    </div>

                    <div className="card back" style={{ width: 300 }}>
                      <p className="card-text">{user.about}.</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </label>
      </div>
    </div>
  );
}

export default About;
