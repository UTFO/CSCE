import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import '../pages/Join.css';

const RoleCard = ({ role, description, eventKey }) => {
  return (
    <Accordion.Item eventKey={eventKey} className="join-info">
      <Accordion.Header className="join-info">{role}</Accordion.Header>
      <Accordion.Body>{description}</Accordion.Body>
    </Accordion.Item>

    // <Card>
    //   <Card.Header>
    //     <Accordion.Toggle as={Button} variant="link" eventKey={eventKey}>
    //       {role}
    //     </Accordion.Toggle>
    //   </Card.Header>
    //   <Accordion.Collapse eventKey={eventKey}>
    //     <Card.Body>
    //       <p>{description}</p>
    //     </Card.Body>
    //   </Accordion.Collapse>
    // </Card>
  );
};

export default RoleCard;
