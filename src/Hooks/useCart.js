import { useEffect, useState } from "react";
import { getCart } from "../utilities/FakeDb";
import useCategories from "./useCategories";
import useData from "./useData";

const useCart = ()=> {
  const categories = useCategories();
  const {setFoods } = useData();
  
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
    
};

export default useCart;
