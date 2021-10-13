import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const HeroCard = () => {
  return (
    <Container>
      <Row xs={1} md={2} lg={4} className="g-4 text-white">
        <Col>
          <div className="p-4">
            <div>
              <img
                className="rounded-circle mb-4"
                width="100px"
                src="https://preview.colorlib.com/theme/feliciano/images/xbreakfast-1.jpg.pagespeed.ic.gqikzjjE5l.webp"
                alt=""
              />
              <h4>Grilled Beef with potatoes</h4>
              <h6>Meat, Potatoes, Rice, Tomatoe</h6>
            </div>
          </div>
        </Col>
        <Col>
          <div className="p-4">
            <div>
              <img
                className="rounded-circle mb-4"
                width="100px"
                src="https://preview.colorlib.com/theme/feliciano/images/xbreakfast-2.jpg.pagespeed.ic.e2TljVvmuq.webp"
                alt=""
              />
              <h4>Grilled Beef with potatoes</h4>
              <h6>Meat, Potatoes, Rice, Tomatoe</h6>
            </div>
          </div>
        </Col>
        <Col>
          <div className="p-4">
            <div>
              <img
                className="rounded-circle mb-4"
                width="100px"
                src="https://preview.colorlib.com/theme/feliciano/images/xbreakfast-3.jpg.pagespeed.ic.cBzD6Aw8L0.webp"
                alt=""
              />
              <h4>Grilled Beef with potatoes</h4>
              <h6>Meat, Potatoes, Rice, Tomatoe</h6>
            </div>
          </div>
        </Col>
        <Col>
          <div className="p-4">
            <div>
              <img
                className="rounded-circle mb-4"
                width="100px"
                src="https://preview.colorlib.com/theme/feliciano/images/xbreakfast-4.jpg.pagespeed.ic.LkDqIcw1ZE.webp"
                alt=""
              />
              <h4>Grilled Beef with potatoes</h4>
              <h6>Meat, Potatoes, Rice, Tomatoe</h6>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroCard;