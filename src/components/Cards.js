import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {} from "../img/Carouselstyle.css";
import { Container, Row } from "react-bootstrap";

const Cards = () => {
  const realestate = [
    {
      id: 1,
      name: "Shtepia ne Prishtin",
      description:
        "Three-storey villa for sale, coht simple f surrounded by a green belt. The condition is very well maintained invested wisely. You are welcome for a visit. ",
      img: "https://thermohouse.co.uk/wp-content/uploads/2019/04/hero-image.jpg",
    },
    {
      id: 2,
      name: "Shtepia ne Prizren",
      description:
        "Three-storey villa for sale, coht simple f surrounded by a green belt. The condition is very well maintained invested wisely. You are welcome for a visit. ",

      img: "http://static1.squarespace.com/static/54e8ff62e4b0440df7a42b7a/t/5d7c22a3478b13088d59a6d3/1664516682215/4.jpg?format=1500w",
    },
    {
      id: 3,
      name: "Shtepia ne Ferizaj",
      description:
        "Three-storey villa for sale, coht simple f surrounded by a green belt. The condition is very well maintained invested wisely. You are welcome for a visit. ",
      img: "https://www.rmjeconstruction.com/wp-content/uploads/2019/10/Residential-House-Design-Philippines.jpg",
    },
    {
      id: 4,
      name: "Shtepia ne Prizren",
      description:
        "Three-storey villa for sale, coht simple f surrounded by a green belt. The condition is very well maintained invested wisely. You are welcome for a visit. ",
      img: "https://thearchitecturedesigns.com/wp-content/uploads/2019/05/15-residential-house-design-759x500.jpg",
    },
    {
      id: 5,
      name: "Shtepia ne Prishtin",
      description:
        "Three-storey villa for sale, coht simple f surrounded by a green belt. The condition is very well maintained invested wisely. You are welcome for a visit. ",
      img: "https://i.pinimg.com/236x/f8/a9/19/f8a9191eb8f9d50accf8127bc974a1be--craftsman-exterior-craftsman-style-houses.jpg",
    },
    {
      id: 6,
      name: "Shtepia ne Prizren",
      description:
      "Three-storey villa for sale, coht simple f surrounded by a green belt. The condition is very well maintained invested wisely. You are welcome for a visit. ",
      img: "https://qph.cf2.quoracdn.net/main-qimg-69fdcd3ff248f8f2b0104f36021c9e8c-lq",
    },
    {
      id: 7,
      name: "Shtepia ne Ferizaj",
      description:
        "Three-storey villa for sale, coht simple f surrounded by a green belt. The condition is very well maintained invested wisely. You are welcome for a visit. ",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiWjqwClJHZJSNRmhv0g6aFf1pIPsTt3PfMfaPxPWxB6ns7SAuRpD16GmhUWHLHqwaFB0&usqp=CAU",
    },
    {
      id: 8,
      name: "Shtepia ne Prizren",
      description:
        "Three-storey villa for sale, coht simple f surrounded by a green belt. The condition is very well maintained invested wisely. You are welcome for a visit. ",
      img: "https://i.pinimg.com/736x/de/1c/a7/de1ca79b55c3ef26259fec908cd40be0.jpg",
    },
  ];

  return (
    <>
      <Container className="ContainerRow">
        <Row className="row2">
          {realestate.map((real) => (
            <Card style={{ width: "18rem" }} className="cardss">
              <Card.Img variant="top" src={real.img} className="imgcard" />
              <Card.Body>
                <Card.Title>{realestate.id}</Card.Title>
                <Card.Text>{real.description}</Card.Text>
                <Button variant="primary" className="btncards">Buy</Button>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Cards;
