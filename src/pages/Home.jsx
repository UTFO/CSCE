/* eslint-disable prettier/prettier */
import EventCard from '../components/EventCard';
import Events from '../data/Events.json';
import './Home.css';

const Home = () => {
  let UpcomingEventCardList = [];

  //returns all event objects with a starting date past the current date
  const filterUpcomingEvents = (eventData) => {
    //array of upcoming events
    let upcomingEvents = []
    const currentDate = new Date()
    for (let i = 0; i < eventData.length; i++) {
      // convert the data stored in the json file to a javascript date using a date string
      const dateOfEvent = new Date(eventData[i].eventDate + " " + eventData[i].eventStartTime)
      //if the event starting date is past the current date, add it to the array of upcoming events
      if (dateOfEvent > currentDate) {
        upcomingEvents.push(eventData[i])
      }
    }
    // return all upcoming events 
    return upcomingEvents;
  }

  // creates a list of EventCards given a list of event objects
  const createEventCards = (eventData) => {
    // create event cards using data
    let eventCardList = [];
    for (let i = 0; i < eventData.length; i++) {
      eventCardList.push(
        <div className={(i == eventData.length - 1) ? "CardHolder BottomCardHolder" : "CardHolder"}>
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
  }

  const currentEvents = filterUpcomingEvents(Events);
  UpcomingEventCardList = createEventCards(currentEvents);
  
  return (
    <div>
      <div>
        <h1>This is the home page</h1>
      </div>
      <div className="EventHolder">
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
    </div>
  );
};

export default Home;
