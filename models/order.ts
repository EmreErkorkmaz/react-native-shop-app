import { CartItem } from "./cart-item";

export class Order {
  id: string; 
  items: CartItem; 
  totalAmount: number;
  date: Date
  
  constructor(id: string, items: CartItem, totalAmount: number, date: Date) {
    this.id = id;
    this.items = items;
    this.totalAmount = totalAmount;
    this.date = date;
  }
}