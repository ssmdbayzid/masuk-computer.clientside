import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import img from '../images/banner/banner1.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default Banner;