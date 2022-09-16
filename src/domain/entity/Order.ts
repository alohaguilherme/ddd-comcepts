import Coupon from "./Coupon";
import Cpf from "./Cpf";
import Freight from "./Freight";
import Item from "./Item";
import OrderCode from "./OrderCode";
import OrderItem from "./OrderItem";

export default class Order {
  cpf: Cpf;
  orderItems: OrderItem[];
  coupon: Coupon | undefined;
  freight: Freight;
  code: OrderCode

  constructor(cpf: string, readonly issueDate: Date = new Date(), readonly sequence: number = 1) {
    this.cpf = new Cpf(cpf);
    this.orderItems = [];
    this.freight = new Freight();
    this.code = new OrderCode(issueDate, sequence)
  }

  addCupon(coupon: Coupon) {
    if (!coupon.isExpired(this.issueDate)) {
      this.coupon = coupon
    }
  }

  addItem(item: Item, quantity: number) {
    this.freight.addItem(item, quantity)
    this.orderItems.push(new OrderItem(item.idItem, item.price, quantity))
  }

  getTotal(): number {
    let total: number = 0;
    for (const orderItem of this.orderItems) {
      total += orderItem.getTotal();
    }
    if (this.coupon) {
      total -= this.coupon.calculateDiscount(total);
    }
    total += this.freight.getTotal()
    return total
  }
}