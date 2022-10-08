import React from 'react'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const ImgSlider = (props) => {
    const settings = {
        dots: true,
        Infinite:true,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:false,
    }
  return (

        <Carousel {...settings}>
          <Wrap>
            
            <a>
                <img src="/images/slider-badging.jpg"  alt="slider-1" /> 
            </a>
          </Wrap>
          <Wrap>
            
            <a>
                <img src="/images/slider-badag.jpg" alt="slider-1" /> 
            </a>
          </Wrap>
          <Wrap>
            
            <a>
                <img src="/images/slider-scale.jpg" alt="slider-1" /> 
            </a>
          </Wrap>
          <Wrap>
            
            <a>
                <img src="/images/slider-scales.jpg" alt="slider-1" /> 
            </a>
          </Wrap>

        </Carousel>
  )
        
}
const Carousel = styled(Slider)`
position: relative;
  margin-top: 20px; 
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    :hover{
    opacity: 1;
    transition: opacity 0.2s ease;
  }
  }
ul li button{
    &::before{
        font-size: 15px;
        color: rgb(150,158,171);
        }
}
li.slick-active button:before {
color:white ;
}
    .slick-list{
        overflow: initial;
    }
`
const Wrap = styled.div`
width: auto;
border-radius: 4px;
position: relative;
a{
  border-radius: 4px;
  display: block;
  cursor: pointer;
  padding: 4px;
  box-shadow:
   rgb(0 0 0 /69%) 0px 26px 30px -10px,
   rgb(0 0 0 /73%) 0px 16px 10px -10px;

   img{
  width: 100%;
}
 &:hover{
  padding: 0;
  border: 4px solid rgb(249,249,249,0.8);
  transition-duration: 300;
  transition: all 0.2s ease;
 }
}

`
export default ImgSlider;