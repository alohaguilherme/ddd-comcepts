import Item from "./Item";

export default class Freight {
  private total: number;
  private DISTANCE: number = 1000;
  private VALUE_MINIMAL: number = 10;

  constructor() {
    this.total = 0;
  }

  addItem(item: Item, quantity: number) {
    this.total += (item.getVolume() * this.DISTANCE * (item.getDensity() / 100) * quantity);
  }

  getTotal() {
    if (this.total > 0 && this.total < 10) return this.VALUE_MINIMAL;
    return this.total;
  }
}