export default class Coupon {
  constructor(readonly code: string, readonly percentage: number, readonly expiredDate?: Date) { }

  isExpired(today: Date = new Date()): boolean {
    if (!this.expiredDate) return false
    return this.expiredDate.getTime() < today.getTime()
  }

  calculateDiscount(valueTotalOrder: number) {
    return ((valueTotalOrder * this.percentage) / 100);
  }
}
