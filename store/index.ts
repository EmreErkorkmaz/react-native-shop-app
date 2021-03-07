import { combineReducers, createStore } from "redux";
import { Product } from "../models/product";
import cartReducer, { CartStateProps } from "./reducers/cart";
import productsReducer, { ProductsStateProps } from './reducers/products';

export type UseSelectorProps = {
  products: ProductsStateProps,
  cart: CartStateProps
}

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer
})

export const store = createStore(rootReducer);