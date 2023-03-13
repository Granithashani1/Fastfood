import React from "react";
import { Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import AdvancedExample from "../components/morepage";
import data from "../components/packet.json";
import ReadMore from "../components/readmore";
import {} from "../img/About.css";
const About = () => {
  return (
    <>
      <Container className="methodcards">
        <Row>
          {data.map((item) => (
            <Card key={item.id} className="sizeCard">
              <Card.Img variant="top" src={item.image} alt="images" />
              <Card.Body>
                <Card.Text></Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Profession: {item.profession}</ListGroup.Item>
                <ListGroup.Item>Name: {item.name}</ListGroup.Item>
                <ListGroup.Item>Age: {item.age}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">
                  {" "}
                  <ReadMore />{" "}
                </Card.Link>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
      <AdvancedExample />
     
    </>
  );
};

export default About;
