import "./Home.css";
import { useState } from "react";
import Slider from 'react-slick';
import React from 'react'
// import Index from "../../Components/Index";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

//Imports for all art pieces into a gallery showcase
import elephant from "../../assets/elephant.png";
import human from "../../assets/human.png";
import seen from "../../assets/seen.png";
import sticker from "../../assets/sticker.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [elephant, human, seen, sticker];

function Home() {

  //Left and Right arrows
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  //Slider settings
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };


  //Home Container   
    return (
        <Container id="Home">
          
          <figure>
              <Slider {...settings}>  
                  {images.map((img, idx) => (
                    <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                      <img src={img} alt={img} />
                    </div>
                  ))}
              </Slider>
                <div className="caption">
                  <figcaption>             
                    <h1>ADVENTURE AWAITS</h1>
                    <p>What are you waiting for?</p>
                  </figcaption> 
                </div>
          </figure>
        </Container>
    
  )
}
export default Home;