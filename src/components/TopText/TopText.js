import React from 'react';
import { Container } from 'react-bootstrap';
import "./TopText.css"
const TopText = () => {
  return (
    <div className='top-text-main d-none d-md-block'>
      <Container>
        <div className='top-text'>
          <p>
            <i className="fas fa-phone-alt me-2"></i>
            <span>+ 1235 2355 98</span>
          </p>
          <p>
            <i className="fas fa-location-arrow me-2"></i>
            <span>+ youremail@email.com</span>
          </p>
          <p>
            <span>Open hours: Monday - Sunday 8:00AM - 9:00PM</span>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default TopText;