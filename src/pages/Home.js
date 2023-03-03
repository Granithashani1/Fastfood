import React from "react";
import Carousel from "react-bootstrap/Carousel";
import {} from "../img/Carouselstyle.css";
import Cards from "../components/Cards";
import AdvancedExample from "../components/morepage";

const Home = () => {
  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://rare-gallery.com/uploads/posts/885994-Hamburger-Fast-food-Buns-Closeup.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images6.alphacoders.com/609/609345.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://foodinstitute.com/wp-content/uploads/2022/03/Steak.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <Cards />
      <AdvancedExample />

    </>
  );
};

export default Home;
