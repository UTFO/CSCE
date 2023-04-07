/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { usePopper } from 'react-popper';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPeopleGroup,
  faCircleInfo,
  faBriefcase,
  faMoneyBillTrendUp,
  faBurger,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import './EventCard.css';
import '../App.css'
import foodImg from '../assets/buns-bun-svgrepo-com.svg';
import infoImg from '../assets/lecture-lectern-svgrepo-com.svg';
import fundraiserImg from '../assets/donations-svgrepo-com.svg';
import networkingImg from '../assets/networking-svgrepo-com.svg';

const EventCard = ({
  eventName,
  eventDate,
  eventStartTime,
  eventEndTime,
  eventLocation,
  eventAddress,
  eventDescription,
  eventTypes,
  eventRegisterLink,
}) => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement);

  // Lists to store icons and the tooltip labels of each icon depending on different activities in each event
  let iconList = [];
  let iconTitleList = [];

  // Depending on event types, add the appropriate icon and icon label to each list
  if (eventTypes.includes('Information Session')) {
    iconList.push(
      <FontAwesomeIcon
        icon={faCircleInfo}
        className="customIcon"
        ref={setReferenceElement}
      />
    );
    iconTitleList.push('Information Session');
  }
  if (eventTypes.includes('Panel')) {
    iconList.push(
      <FontAwesomeIcon
        icon={faPeopleGroup}
        className="customIcon"
        ref={setReferenceElement}
      />
    );
    iconTitleList.push('Panel');
  }
  if (eventTypes.includes('Career Fair')) {
    iconList.push(
      <FontAwesomeIcon
        icon={faBriefcase}
        className="customIcon"
        ref={setReferenceElement}
      />
    );
    iconTitleList.push('Career Fair');
  }
  if (eventTypes.includes('Fundraiser')) {
    iconList.push(
      <FontAwesomeIcon
        icon={faMoneyBillTrendUp}
        className="customIcon"
        ref={setReferenceElement}
      />
    );
    iconTitleList.push('Fundraiser');
  }
  if (eventTypes.includes('Food Provided')) {
    iconList.push(
      <FontAwesomeIcon
        icon={faBurger}
        className="customIcon"
        ref={setReferenceElement}
      />
    );
    iconTitleList.push('Food Provided');
  }

  // Create a list of tooltips using each icon title
  const tooltipList = iconTitleList.map((iconLabel) => {
    return (
      // eslint-disable-next-line react/jsx-key
      <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
        {iconLabel}
      </div>
    );
  });

  // Creates a list of components that display the icon along with a tooltip
  const overlayList = [];
  // add left padding to every icon except the last
  for (let i = 0; i < iconList.length - 1; i++) {
    overlayList.push(
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 0 }}
        overlay={tooltipList[i]}
      >
        <div className="iconHolder">{iconList[i]}</div>
      </OverlayTrigger>
    );
  }
  // add the last icon without padding
  overlayList.push(
    <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 0 }}
      overlay={tooltipList[iconList.length - 1]}
    >
      <div>{iconList[iconList.length - 1]}</div>
    </OverlayTrigger>
  );

  //determine image
  const index = Math.floor(Math.random() * eventTypes.length)
  const imgString = eventTypes[index]
  let imgLink;
  switch (imgString) {
    case ("Information Session" || "Panel"):
      imgLink = infoImg;
      break;
    case ("Food Provided"):
      imgLink = foodImg
      break;
    case ("Fundraiser"):
      imgLink = fundraiserImg
      break;
    case ("Career Fair"):
      imgLink = networkingImg
      break;
    default:
      imgLink = infoImg;
  }

  return (
    <Card className="bg-light-subtle customCardClass enlarge">
      <Card.Img variant="top" src={imgLink} style={{height:"auto", width:"100%", objectFit:"contain", borderRadius: "25px 25px 0 0"}}/>
      <Card.Body style={{paddingBottom: "1.5em"}}>
        <div className="customCardHeader">
          <Card.Title>{eventName}</Card.Title>
          <div style={{ display: 'inline-flex' }}>{overlayList}</div>
        </div>
        <Card.Subtitle className="mb-2 text-muted">{eventDate} | {eventStartTime} - {eventEndTime} EDT</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          {eventLocation}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          {eventAddress}
        </Card.Subtitle>
        <Card.Text>{eventDescription}</Card.Text>
        <Button
          variant="primary"
          href={eventRegisterLink}
          className="btn btn-success btn-lg px-3 me-md-2 EventCardButton"
          target="_blank"
          style={{ display: eventRegisterLink === '#' ? 'none' : 'inline' }}
        >
          Register
        </Button>
      </Card.Body>
    </Card>
  );
};

EventCard.propTypes = {
  eventName: PropTypes.string,
  eventDate: PropTypes.string,
  eventEndTime: PropTypes.string,
  eventStartTime: PropTypes.string,
  eventLocation: PropTypes.string,
  eventAddress: PropTypes.string,
  eventDescription: PropTypes.string,
  eventTypes: PropTypes.array,
  eventRegisterLink: PropTypes.string 
}

export default EventCard;
