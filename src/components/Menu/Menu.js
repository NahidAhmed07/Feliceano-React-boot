
import React from "react";
import { Container } from "react-bootstrap";

import useCategories from "../../Hooks/useCategories";
import useData from "../../Hooks/useData";
import { addToCard } from "../../utilities/FakeDb";
import Food from "../Food/Food";
import "./Menu.css";

const Menu = () => {
  
  const categorys = useCategories();
  const { addToOrderCart } = useData();
 
  return (
    <Container className="my-5">
      <div className="position-relative margin text-center">
        <span className="menuTitle">Specialties</span>
        <h1 className="display-3 fw-bold mb-3">Our Menu</h1>
      </div>
      <div className="row mt-5 g-4">
        {
          categorys.length && categorys.map((category) => (
          <Food
            key={category.idCategory}
            category={category}
            addToOrderCart={addToOrderCart}
            addToCard={addToCard}
          ></Food>
        ))}
      </div>
    </Container>
  );
};

export default Menu;