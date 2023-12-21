import Carousel from "react-bootstrap/Carousel";

import React from 'react';
function Slider() {
  
 
  return (
    <Carousel variant="dark">
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={"https://assets-in.bmscdn.com/promotions/cms/creatives/1702380791417_raastathakudaweb.png"} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100" src={"https://assets-in.bmscdn.com/promotions/cms/creatives/1701414691882_isl10hyderabadfc1240x300.jpg"} alt="Second slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={"https://assets-in.bmscdn.com/promotions/cms/creatives/1702536165956_kingweb.jpg"} alt="Third slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;