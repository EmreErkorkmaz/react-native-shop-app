import { Product } from "../../models/product";

export const ADD_TO_CART = "ADD_TO_CART";

export const addToCart = (product: Product) => {
  return { type: ADD_TO_CART, payload: { product: product } };
};
