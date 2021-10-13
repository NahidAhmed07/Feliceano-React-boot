import React from 'react';
import { Col, Row } from 'react-bootstrap';
import useCounter from '../../Hooks/useCounter';
import { imageArray } from '../../utilities/heroBg';
import HeroCard from '../HeroCard/HeroCard';
import Menubar from '../Menubar/Menubar';
import TopText from '../TopText/TopText';
import './Hero.css';


const Hero = () => {
  const [counter] = useCounter(0, imageArray.length)
  
  const heroMainStyle = {
    backgroundImage: `url(${imageArray[counter]})`,
    transition: "all 1.5s ease",
  };
  
  return (
    <div className="hero-main container-fluid" style={heroMainStyle}>
      <TopText></TopText>
      <Menubar></Menubar>
      <hr className="text-white" />
      <Row className='my-5 py-4'>
        <Col className="hero-text">
          <div>
            <h1>Feliciano</h1>
            <h2>NUTRITIOUS &amp; TASTY</h2>
          </div>
        </Col>
      </Row>
      <hr className="text-white" />

      <HeroCard></HeroCard>
    </div>
  );
};

export default Hero;
