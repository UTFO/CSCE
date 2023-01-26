import '../App.css';
import LandscapeSvg from '../assets/landscape.svg';
import EventCard from '../components/EventCard';
import Events from '../data/Events.json';
import './Home.css';

const Home = () => {
  let UpcomingEventCardList = [];

  //returns all event objects with a starting date past the current date
  const filterUpcomingEvents = (eventData) => {
    //array of upcoming events
    let upcomingEvents = [];
    const currentDate = new Date();
    for (let i = 0; i < eventData.length; i++) {
      //variable to store time as 24 h
      let startTime;
      //convert event start time to 24h format
      if (eventData[i].eventStartTime.includes('a.m.')) {
        const index = eventData[i].eventStartTime.indexOf(' ');
        startTime = eventData[i].eventStartTime.substring(0, index);
      } else if (eventData[i].eventStartTime.includes('p.m.')) {
        //convert hour into 24 h format
        const hour = 12 + parseInt(eventData[i].eventStartTime.substring(0, 2));
        //add converted hour and minutes to full string
        //i.e "13" + ":30" -> "13:30"
        const indexOfColon = eventData[i].eventStartTime.indexOf(':');
        startTime =
          String(hour) +
          eventData[i].eventStartTime.substring(indexOfColon, indexOfColon + 2);
      }
      // convert the data stored in the json file to a javascript date using a date string
      const dateOfEvent = new Date(eventData[i].eventDate + ' ' + startTime);
      //if the event starting date is past the current date, add it to the array of upcoming events
      if (dateOfEvent > currentDate) {
        upcomingEvents.push(eventData[i]);
      }
    }
    // return all upcoming events
    return upcomingEvents;
  };

  // creates a list of EventCards given a list of event objects
  const createEventCards = (eventData) => {
    // create event cards using data
    let eventCardList = [];
    for (let i = 0; i < eventData.length; i++) {
      eventCardList.push(
        <div
          className={
            i == eventData.length - 1
              ? 'CardHolder BottomCardHolder'
              : 'CardHolder'
          }
        >
          <EventCard
            eventName={eventData[i].eventName}
            eventDate={eventData[i].eventDate}
            eventStartTime={eventData[i].eventStartTime}
            eventEndTime={eventData[i].eventEndTime}
            eventDescription={eventData[i].eventDescription}
            eventRegisterLink={eventData[i].eventRegisterLink}
            eventTypes={eventData[i].eventTypes}
            eventLocation={eventData[i].eventLocation}
            eventAddress={eventData[i].eventAddress}
          />
        </div>
      );
    }
    //return list of cards
    return eventCardList;
  };

  const currentEvents = filterUpcomingEvents(Events);
  UpcomingEventCardList = createEventCards(currentEvents);

  return (
    <div className="background">
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="../assets/heropicture.svg"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              Canadian Society of Civil Engineers
            </h1>
            <p className="col-6 lead">
              University of Toronto Chapter
              <img
                className="img-fluid UofTLogo"
                src="../assets/UofTLogo.svg"
              />
            </p>
          </div>
        </div>
      </div>

      <div className="EventHolder enlarge">
        <div style={{ textAlign: 'center', paddingTop: 20 }}>
          <h2 className="EventHolderTitle">Upcoming Events</h2>
          <p
            className="EventHolderTitle"
            style={{
              paddingTop: 0,
              paddingBottom: 0,
              paddingRight: '1em',
              paddingLeft: '1em',
              marginBottom: 0,
            }}
          >
            Check out some of our upcoming events
          </p>
        </div>
        {UpcomingEventCardList}
      </div>
      <div>
        <img src={LandscapeSvg} alt="Landscape" />
      </div>
    </div>
  );
};

export default Home;
