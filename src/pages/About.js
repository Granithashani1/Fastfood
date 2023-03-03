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
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/v9sns8JXJ2M?autoplay=1&mute=1&loop=1&playlis=2XhPa-1pl4Y&controls=0"></iframe>
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
