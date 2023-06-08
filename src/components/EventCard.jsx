import {
  faBriefcase,
  faBurger,
  faCircleInfo,
  faMoneyBillTrendUp,
  faPeopleGroup,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Row from 'react-bootstrap/Row';
import Tooltip from 'react-bootstrap/Tooltip';
import { usePopper } from 'react-popper';
import './EventCard.css';

const EventCard = ({
  eventPoster,
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
      <Tooltip ref={setPopperElement}>{iconLabel}</Tooltip>
    );
  });

  // Creates a list of components that display the icon along with a tooltip
  const overlayList = [];
  // add left padding to every icon except the last
  for (let i = 0; i < iconList.length - 1; i++) {
    overlayList.push(
      <OverlayTrigger placement="top" overlay={tooltipList[i]}>
        <div className="pe-2">{iconList[i]}</div>
      </OverlayTrigger>
    );
  }
  // add the last icon without padding
  overlayList.push(
    <OverlayTrigger placement="top" overlay={tooltipList[iconList.length - 1]}>
      <div>{iconList[iconList.length - 1]}</div>
    </OverlayTrigger>
  );

  return (
    <Col md={6} lg={4} className="mb-4">
      <Card className="h-100 event-card shadow text-white">
        <Card.Img src={eventPoster} fluid />
        <Card.Body style={{ paddingBottom: '1.5em' }}>
          <Card.Title className="pb-1">{eventName}</Card.Title>
          <Row className="pb-3">
            <Col xl={6} lg={12} className="d-flex align-items-center">
              <Card.Subtitle className="d-flex mb-1">
                {overlayList}
              </Card.Subtitle>
            </Col>
          </Row>

          <Card.Subtitle className="mb-2">
            <small>
              {eventDate} | {eventStartTime} - {eventEndTime} EST
            </small>
          </Card.Subtitle>
          <Card.Subtitle className="mb-2">
            <small>{eventLocation}</small>
          </Card.Subtitle>
          <Card.Subtitle className="mb-2">
            <small>{eventAddress}</small>
          </Card.Subtitle>
          <Card.Text>{eventDescription}</Card.Text>
          <Button
            variant="dark"
            href={eventRegisterLink}
            target="_blank"
            style={{ display: eventRegisterLink === '#' ? 'none' : '' }}
          >
            Register
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default EventCard;
