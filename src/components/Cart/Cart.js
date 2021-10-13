import React from 'react';
import useCart from '../../Hooks/useCart';
import useData from '../../Hooks/useData';

const Cart = () => {

  const { foods } = useData();
  // console.log(foods);

  return (
    <div>

      <h2>This is Cart</h2>
      {
        // foods.map(fd => <h3>hello </h3>)
      }
    </div>
  );
};

export default Cart;