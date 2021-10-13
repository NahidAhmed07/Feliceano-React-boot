
import React, { createContext, useEffect, useState } from 'react';
import useCategories from '../Hooks/useCategories';
import { getCart } from '../utilities/FakeDb';

export const AllDataContext = createContext();

const AllDataProvider = ({ children }) => {
  const [foods, setFoods] = useState([]);
  const categories = useCategories();
 
  const addToOrderCart = (food) => {
    
    const exist = foods.find((fd) => fd.strCategory === food.strCategory);
    if (exist) {
      const rest = foods.filter((fd) => fd.strCategory !== exist.strCategory);
      exist.quantity += 1;
      setFoods([...rest, exist]);
    } else {
      food.quantity = 1;
      setFoods([...foods, food]);
    }
  };
   useEffect(() => {
     if (categories) {
       const strodedCart = [];
       const cartObject = getCart();

       for (const key in cartObject) {
         const findItem = categories.find(
           (category) => category.strCategory === key
         );
         if (findItem) {
           findItem.quantity = cartObject[key];
           strodedCart.push(findItem);
         }
       }
       setFoods(strodedCart);
     }
   }, [categories]);
  
  
  return (
    <AllDataContext.Provider value={{addToOrderCart,foods,setFoods }}>
      {children}
    </AllDataContext.Provider>
  );
};

export default AllDataProvider;