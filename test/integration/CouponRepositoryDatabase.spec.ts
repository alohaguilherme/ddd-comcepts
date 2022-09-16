import Connection from "../../src/infra/database/Connection";
import PostgreSQLConnectionAdapter from "../../src/infra/database/PostgreSQlConnectionAdapter";
import CouponRepositoryDatabase from "../../src/infra/repository/database/CouponRepositoryDatabase";
import CouponRepositoryMemory from "../../src/infra/repository/memory/CouponRepositoryMemory";


describe('Coupon Repository integration tests', function () {
  let connection: Connection;
  beforeEach(function () {
    connection = new PostgreSQLConnectionAdapter()
  })
  it("test repository coupon discount", async function () {
    // const couponRepository = new CouponRepositoryDatabase(connection)
    const couponRepository = new CouponRepositoryMemory()
    const coupon = await couponRepository.getByCode("VALE20");
    expect(coupon?.percentage).toBe(20)
  });

  afterEach(async function () {
    await connection.close();
  })
});