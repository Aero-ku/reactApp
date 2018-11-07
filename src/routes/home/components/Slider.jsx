import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import './Slider.css';
const PosterSlide = ({ data }) => {
  const settings = {
    dots: true,
    autoplay: true,
    className: 'slide',
    dotsClass: 'posterSlide__dots'
  };
  return (
    <Slider {...settings}>
      {
        data.map(item => (
          <div key={item.image}>
            <img className='posterSlide__image' src={item.image} alt=""/>
          </div>
        ))
      }
    </Slider>
  );
};

PosterSlide.propTypes = {
  data: PropTypes.array.isRequired,
};

export default PosterSlide;
