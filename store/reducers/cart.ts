import { CartItem } from "../../models/cart-item";
import { Product } from "../../models/product";
import { ADD_TO_CART } from "../actions/cart";

export type CartStateProps = {
  items: any;
  totalAmount: number;
};

const initialState = {
  items: {},
  totalAmount: 0,
};

export default (
  state: CartStateProps = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct: Product = action.payload.product;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.title;

      let updatedOrNewCartItem;

      if (state.items[addedProduct.id]) {
        updatedOrNewCartItem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          prodPrice,
          prodTitle,
          state.items[addedProduct.id].sum + prodPrice
        );
      } else {
        updatedOrNewCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
      }
      return {
        ...state,
        items: { ...state.items, [addedProduct.id]: updatedOrNewCartItem },
        totalAmount: state.totalAmount + prodPrice,
      };

    default:
      return state;
  }
};
