import React from 'react';
import { Card } from 'react-bootstrap';

const Food = (props) => {
 
  const { strCategory, strCategoryThumb } = props.category;
  const { addToOrderCart, addToCard } = props;

  const handleAddToCart = () => {
    addToCard(strCategory);
    addToOrderCart(props.category);
  };
  return (
    <div className="col-12 col-md-12 col-lg-6 d-flex shadow-lg ">
      <Card>
        <div className="row">
          <div className="col-5 col-md-6">
            <Card.Img src={strCategoryThumb} />
          </div>
          <div className="col-5 col-md-4">
            <Card.Body>
              <Card.Title>{strCategory}</Card.Title>
              <Card.Text>
                Meat, Potatoes,
                <br /> Tomatoe
              </Card.Text>
              <button onClick={handleAddToCart} className="menu-btn">
                Order Now
              </button>
            </Card.Body>
          </div>
          <div className="col-2 pt-4 fw-bold fs-5 text-danger">
            <strong>$29</strong>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Food;