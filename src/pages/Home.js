import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slide from '../img/slide.jpg';
import slide1 from '../img/slide1.jpg';
import slide2 from '../img/slide2.jpg';
import {} from '../img/Carouselstyle.css';
import Button from 'react-bootstrap/Button';
import Cards from '../components/Cards';

const Home = () => {
  return (
    <>
      <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide} 
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className='fistslide'>Prishtin</h5>
          <p className='fistslide'>Location: Prishtin Rr."Lidhja Prizerenit"</p>
          <Button variant="primary">RENT | $ 2000K</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide1}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h5 className='fistslide'>Prizeren</h5>
          <p className='fistslide'>Location: Prizeren Rr."Avdi Kelmendi"</p>
          <Button variant="primary">RENT | $ 1000K</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide2}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h5 className='fistslide'>Ferizaj</h5>
          <p className='fistslide'>Location: Prishtin Rr."Skenderbeu"</p>
          <Button variant="primary">RENT | $ 1430K</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Cards />
    </>
  )
}

export default Home
