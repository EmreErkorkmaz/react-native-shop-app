import PRODUCTS from "../../data/dummy-data";
import { Product } from "../../models/product";

export type ProductsStateProps = {
  availableProducts: Product [];
  userProducts: Product [];
}

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1')
};

export default (state: ProductsStateProps = initialState, action: any) => {
  return state;
}