import { CartItem } from "../../models/cart-item";
import { Product } from "../../models/product";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";


export type CartItemProps = {
  [id: string] : {
    quantity: number,
    productPrice: number,
    productTitle: string,
    sum: number
  }
}

export type CartStateProps = {
  items: CartItemProps;
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

      case REMOVE_FROM_CART:
        const productId = action.payload.pid;
        const selectedProduct = state.items[productId];
        const currentQuantity = selectedProduct.quantity;
        let updatedCartItems;
        if(currentQuantity > 1) {
          const updatedCartItem = new CartItem(
            selectedProduct.quantity - 1, 
            selectedProduct.productPrice, 
            selectedProduct.productTitle, 
            selectedProduct.sum - selectedProduct.productPrice
          );
          updatedCartItems = {...state.items, [productId]: updatedCartItem }
        } else {
          updatedCartItems = { ...state.items };
          delete updatedCartItems[productId];
        }

        return {
          ...state,
          items: updatedCartItems,
          totalAmount: state.totalAmount - selectedProduct.productPrice
        }
        
    default:
      return state;
  }
};
