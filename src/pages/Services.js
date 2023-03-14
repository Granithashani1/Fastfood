import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {} from "../img/Carouselstyle.css";
import { Container, Row } from "react-bootstrap";

const foodmenu = () => {
  const foodcards = [
    {
      id: 1,
      description:
        "Three-storey villa for sale, coht simple f surrounded by a green belt. The condition is very well maintained invested wisely. You are welcome for a visit. ",
      img: "https://twisper.com/wp-content/uploads/2020/03/close-up-photo-of-burger-3915906-scaled.jpg",
    },
    {
      id: 2,
      description:
        "Three-storey villa for sale, coht simple f surrounded by a green belt. The condition is very well maintained invested wisely. You are welcome for a visit. ",

      img: "https://www.foodandwine.com/thmb/I_QAIl1ARO5vVzSmC_MFFYHFxs8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hatch-chile-smash-burgers-FT-seo-RECIPE0719_0-183c980af99541528d6cfa7f40ca2c21.jpg",
    },
    {
      id: 3,
      description:
        "Three-storey villa for sale, coht simple f surrounded by a green belt. The condition is very well maintained invested wisely. You are welcome for a visit. ",
      img: "https://c4.wallpaperflare.com/wallpaper/1017/647/742/food-pizza-still-life-hd-wallpaper-preview.jpg",
    },
    {
      id: 4,
      description:
        "Three-storey villa for sale, coht simple f surrounded by a green belt. The condition is very well maintained invested wisely. You are welcome for a visit. ",
      img: "https://i.pinimg.com/originals/95/33/79/9533794df04871f13da3bfa1223b187b.jpg",
    },
    {
      id: 5,
      description:
        "Three-storey villa for sale, coht simple f surrounded by a green belt. The condition is very well maintained invested wisely. You are welcome for a visit. ",
      img: "https://www.weirdworm.com/wp-content/uploads/2018/08/Pizza.jpg",
    },
    {
      id: 6,
      description:
      "Three-storey villa for sale, coht simple f surrounded by a green belt. The condition is very well maintained invested wisely. You are welcome for a visit. ",
      img: "https://media.istockphoto.com/id/1286362324/photo/different-kinds-of-grilled-meat-on-the-table-at-the-restaurant.jpg?s=612x612&w=0&k=20&c=s6jHDP7k01nz1qlL8NaA_STtQQZCHP7ka5CHed8ueHs=",
    },
    {
      id: 7,
      description:
        "Three-storey villa for sale, coht simple f surrounded by a green belt. The condition is very well maintained invested wisely. You are welcome for a visit. ",
      img: "https://cdn.vox-cdn.com/thumbor/gKs9B47-Bmpg9pVeLs7HaocdpTA=/0x0:3600x2400/1200x900/filters:focal(1512x912:2088x1488)/cdn.vox-cdn.com/uploads/chorus_image/image/59407087/Top__42oz_Porterhouse__Right__8oz_Beef_Tenderloin__Bottom__18oz_Cowboy_Ribeye____Kirsten_Gilliam_.7.jpg",
    },
    {
      id: 8,
      description:
        "Three-storey villa for sale, coht simple f surrounded by a green belt. The condition is very well maintained invested wisely. You are welcome for a visit. ",
      img: "https://telugu.boldsky.com/img/2013/11/06-fish.jpg",
    },
    {
      id: 1,
      name: "Shtepia ne Prishtin",
      description:
        "Three-storey villa for sale, coht simple f surrounded by a green belt. The condition is very well maintained invested wisely. You are welcome for a visit. ",
      img: "https://twisper.com/wp-content/uploads/2020/03/close-up-photo-of-burger-3915906-scaled.jpg",
    },
    {
      id: 2,
      description:
        "Three-storey villa for sale, coht simple f surrounded by a green belt. The condition is very well maintained invested wisely. You are welcome for a visit. ",

      img: "https://www.foodandwine.com/thmb/I_QAIl1ARO5vVzSmC_MFFYHFxs8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hatch-chile-smash-burgers-FT-seo-RECIPE0719_0-183c980af99541528d6cfa7f40ca2c21.jpg",
    },
    {
      id: 3,
      description:
        "Three-storey villa for sale, coht simple f surrounded by a green belt. The condition is very well maintained invested wisely. You are welcome for a visit. ",
      img: "https://c4.wallpaperflare.com/wallpaper/1017/647/742/food-pizza-still-life-hd-wallpaper-preview.jpg",
    },
    {
      id: 4,
      description:
        "Three-storey villa for sale, coht simple f surrounded by a green belt. The condition is very well maintained invested wisely. You are welcome for a visit. ",
      img: "https://i.pinimg.com/originals/95/33/79/9533794df04871f13da3bfa1223b187b.jpg",
    },
    
  ];

  return (
    <>
      <Container className="ContainerRow">
        <Row className="row2">
          {foodcards.map((foods) => (
            <Card style={{ width: "18rem" }} className="cardss">
              <Card.Img variant="top" src={foods.img} className="imgcard" />
              <Card.Body>
                <Card.Title>{foodcards.id}</Card.Title>
                <Button variant="primary" className="btncards">Buy</Button>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
      
    </>
  );
};

export default foodmenu;
