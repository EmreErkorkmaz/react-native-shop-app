import { combineReducers, createStore } from "redux";
import cartReducer, { CartStateProps } from "./reducers/cart";
import ordersReducer, { OrderStateProps } from "./reducers/orders";
import productsReducer, { ProductsStateProps } from './reducers/products';

export type UseSelectorProps = {
  products: ProductsStateProps,
  cart: CartStateProps,
  orders: OrderStateProps
}

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer
})

export const store = createStore(rootReducer);