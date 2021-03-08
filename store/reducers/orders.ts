import { Order } from "../../models/order";
import { ADD_ORDER } from "../actions/orders";

export type OrderStateProps = {
  orders: Order[];
};

const initialState = {
  orders: [],
};

export default (
  state: OrderStateProps = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case ADD_ORDER:
      const { orderData } = action.payload;
      const newOrder = new Order(
        new Date().toString(),
        orderData.items,
        orderData.amount,
        new Date()
      );

      return { ...state, orders: state.orders.concat(newOrder) };

    default:
      return state;
  }
};
