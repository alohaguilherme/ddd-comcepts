import ValidateCoupon from "../../src/application/usecase/validate-coupon/ValidateCoupon";
import CouponRepository from "../../src/domain/repository/CouponRepository";
import Connection from "../../src/infra/database/Connection";
import PostgreSQLConnectionAdapter from "../../src/infra/database/PostgreSQlConnectionAdapter";
import CouponRepositoryDatabase from "../../src/infra/repository/database/CouponRepositoryDatabase";
import CouponRepositoryMemory from "../../src/infra/repository/memory/CouponRepositoryMemory";

describe("Validate Coupon", function () {
  let connection: Connection;
  let couponRepository: CouponRepository;

  beforeEach(function () {
    connection = new PostgreSQLConnectionAdapter()
    // couponRepository = new CouponRepositoryMemory();
    couponRepository = new CouponRepositoryDatabase(connection);
  });

  it("Validate coupon discount", async function () {
    const couponRepository = new CouponRepositoryMemory()
    const validateCoupon = new ValidateCoupon(couponRepository)
    const isValid = validateCoupon.execute("VALE20");
    expect(isValid).toBeTruthy();
  });

  afterEach(async function () {
    await connection.close()
  })
});