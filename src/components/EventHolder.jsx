import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../App.css';
import EventCard from '../components/EventCard';
import Events from '../data/Events.json';
import '../pages/Home.css';

const EventHolder = () => {
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
        <EventCard
          eventPoster={eventData[i].eventPoster}
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
      );
    }
    //return list of cards
    return eventCardList;
  };

  const currentEvents = filterUpcomingEvents(Events);
  UpcomingEventCardList = createEventCards(currentEvents);

  let holderClassName;
  switch (UpcomingEventCardList.length) {
    case 0:
      holderClassName = 'NoCards';
      break;
  }

  let element;

  if (holderClassName != 'NoCards') {
    element = (
      <Container>
        <Row className="d-flex justify-content-center">
          {UpcomingEventCardList}
        </Row>
      </Container>
    );
  } else {
    element = (
      <div className={holderClassName}>
        <h2 style={{ color: 'white' }}>
          No Upcoming Events
          <br />
          Check Back Soon!
        </h2>
      </div>
    );
  }

  return element;
};

export default EventHolder;
