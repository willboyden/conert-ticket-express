import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function AccordionVertical(props) {
  return props.cardbody ? (
    <Accordion>
      <Card className={"card bg-dark"}>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            {props.cardhead}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>{props.cardbody}</Card.Body>
        </Accordion.Collapse>
      </Card>
      {/* <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Click me!
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card> */}
    </Accordion>
  ) : (
    <React.Fragment></React.Fragment>
  );
}
