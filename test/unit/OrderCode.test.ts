import OrderCode from "../../src/domain/entity/OrderCode";

describe("Order Code", function () {
  it("Create code for order", function () {
    const date = new Date("2017-03-01T23:59:00")
    const sequence = 1;
    const orderCode = new OrderCode(date, sequence);
    const code = orderCode.value;
    expect(code).toBe("201700000001")
  })
})