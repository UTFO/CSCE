/* eslint-disable prettier/prettier */
import EventCard from '../components/EventCard';
import './Home.css';

const Home = () => {
  const testEvent = {
    eventName: 'test',
    eventDate: 'December 25, 2022',
    eventDescription:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    eventImgSrc:
      'https://static01.nyt.com/images/2011/01/14/arts/14MOVING-span/MOVING-jumbo.jpg',
    eventRegisterLink: '#',
    eventTypes: ['Information Session', 'Panel'],
    eventLocation: 'Benson Building Room 300',
    eventAddress: '80 Huron Street',
  };
  const testEvent2 = {
    eventName: 'test',
    eventDate: 'December 25, 2022',
    eventDescription:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    eventImgSrc:
      'https://static01.nyt.com/images/2011/01/14/arts/14MOVING-span/MOVING-jumbo.jpg',
    eventRegisterLink: 'https://www.google.com/',
    eventTypes: ['Career Fair', 'Fundraiser'],
    eventLocation: 'Benson Building Room 300',
    eventAddress: '80 Huron Street',
  };
  const testEvent3 = {
    eventName: 'test',
    eventDate: 'December 25, 2022',
    eventDescription:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    eventImgSrc:
      'https://static01.nyt.com/images/2011/01/14/arts/14MOVING-span/MOVING-jumbo.jpg',
    eventRegisterLink: 'https://www.google.com/',
    eventTypes: ['Fundraiser', 'Food Provided'],
    eventLocation: 'Benson Building Room 300',
    eventAddress: '80 Huron Street',
  };
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
        <div className="CardHolder">
          <EventCard
            eventName={testEvent.eventName}
            eventDate={testEvent.eventDate}
            eventDescription={testEvent.eventDescription}
            eventImgSrc={testEvent.eventImgSrc}
            eventRegisterLink={testEvent.eventRegisterLink}
            eventTypes={testEvent.eventTypes}
            eventLocation={testEvent.eventLocation}
            eventAddress={testEvent.eventAddress}
          />
        </div>
        <div className="CardHolder">
          <EventCard
            eventName={testEvent2.eventName}
            eventDate={testEvent2.eventDate}
            eventDescription={testEvent2.eventDescription}
            eventImgSrc={testEvent2.eventImgSrc}
            eventRegisterLink={testEvent2.eventRegisterLink}
            eventTypes={testEvent2.eventTypes}
            eventLocation={testEvent2.eventLocation}
            eventAddress={testEvent2.eventAddress}
          />
        </div>
        <div className="CardHolder BottomCardHolder">
          <EventCard
            eventName={testEvent3.eventName}
            eventDate={testEvent3.eventDate}
            eventDescription={testEvent3.eventDescription}
            eventImgSrc={testEvent3.eventImgSrc}
            eventRegisterLink={testEvent3.eventRegisterLink}
            eventTypes={testEvent3.eventTypes}
            eventLocation={testEvent3.eventLocation}
            eventAddress={testEvent3.eventAddress}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
