import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from './1.jpg'
import slider2 from './3-min.jpg'
import slider3 from './beautiful-tropical-beach-sea-min.jpg'

const Banner = () => {
    return (
        <div>
             <Carousel className="carousel">
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={slider1}
                      alt="First slide"
                  />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={slider2}
                      alt="First slide"
                  />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={slider3}
                      alt="First slide"
                  />
              </Carousel.Item>
          </Carousel>
        </div>
    );
};

export default Banner;