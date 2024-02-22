import React from 'react';
import { Carousel } from 'react-bootstrap';
import pic1 from '../../assest/pic1.png';
import pic2 from '../../assest/pic2.jpg';

const BrandCarousel = () => {
    return (

        <Carousel>
            <Carousel.Item>
                <img src={pic1} className='d-block w-100' alt='carousel' />
            </Carousel.Item>
            <Carousel.Item>
                <img src={pic2} className='d-block w-100' alt='carousel' />
            </Carousel.Item>
        </Carousel>
    );
};

export default BrandCarousel;