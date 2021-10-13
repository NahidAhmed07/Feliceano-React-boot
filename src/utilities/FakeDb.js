



const getCart = () => {
  let cart = localStorage.getItem('food_order');
  return cart ? JSON.parse(cart) : {};
}


const addToCard = (id) => {
  
  let cart = getCart();

  if (cart[id]) {
    cart[id] = cart[id] + 1;
  } else {
    cart[id] = 1;
  }
  addtoDatabase(cart);
}

const removeToCart = (id) => {
  const cart = getCart();
  if (cart) {
    delete cart[id]
  }
  addtoDatabase(cart);
}




const addtoDatabase = (cart) => {

  localStorage.setItem("food_order", JSON.stringify(cart));
}




export {
  addToCard, removeToCart, getCart
}