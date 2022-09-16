import Coupon from "../../../domain/entity/Coupon";
import CouponRepository from "../../../domain/repository/CouponRepository";

export default class CouponRepositoryMemory implements CouponRepository {
  private coupons: Coupon[];
  constructor() {
    this.coupons = [
      new Coupon("VALE20", 20),
      new Coupon("VALE30", 30),
      new Coupon("VALE40", 40)
    ]
  }

  async getByCode(code: string): Promise<Coupon | undefined> {
    return this.coupons.find(coupon => coupon.code === code)
  }
}