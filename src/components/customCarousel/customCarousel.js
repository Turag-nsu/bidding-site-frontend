import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './customCarousel.css';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import CarouselImage from "../carouselImage/carouselImage";
import image1 from "../../Images/car.jpeg";
import image2 from "../../Images/car.jpeg";
import image3 from "../../Images/car.jpeg";
function CustomCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className='carousel-area'
      style={{
        height: "60vh",
        marginTop: "5rem",
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <Carousel
        indicators={false}
        controls={false}
      >
        <Carousel.Item>
          <CarouselImage
            img={image1}
            title="First slide label"
            subtitle="Nulla vitae elit libero, a pharetra augue mollis interdum."
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage
            img={image2}
            title="First slide label"
            subtitle="Nulla vitae elit libero, a pharetra augue mollis interdum." />
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage
            img={image3}
            title="First slide label"
            subtitle="Nulla vitae elit libero, a pharetra augue mollis interdum." />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>

    </div>
  );
}

export default CustomCarousel;
