import updatePrice from './updateCost';
import { fetchProduct } from './fetchFunctions';

export const getSavedCartIDs = () => {
  const cartProducts = localStorage.getItem('cartProducts');
  return cartProducts ? JSON.parse(cartProducts) : [];
};

export const saveCartID = (id) => {
  if (!id) throw new Error('Você deve fornecer um ID');

  const cartProducts = getSavedCartIDs();
  const newCartProducts = [...cartProducts, id];
  localStorage.setItem('cartProducts', JSON.stringify(newCartProducts));
};

export const subtractPrice = async (id) => {
  const totalPrice = localStorage.getItem('totalPrice');
  let totalNumber = +totalPrice;
  const product = await fetchProduct(id);
  const { price } = product;
  totalNumber -= price;
  localStorage.setItem('totalPrice', totalNumber.toFixed(2));
  updatePrice();
  return totalNumber;
};

export const removeCartID = (id) => {
  if (!id) throw new Error('Você deve fornecer um ID');
  subtractPrice(id);
  const cartProducts = [...getSavedCartIDs()];
  const indexProduct = cartProducts.indexOf(id);
  cartProducts.splice(indexProduct, 1);
  localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
};
