import { createTupleTypeNode } from "typescript";
import Coupon from "../../src/domain/entity/Coupon";
import Cpf from "../../src/domain/entity/Cpf";
import Dimension from "../../src/domain/entity/Dimension";
import Item from "../../src/domain/entity/Item";
import Order from "../../src/domain/entity/Order";

describe("Order tests", function () {

  it("Not create order with invalid cpf", function () {
    expect(() => new Order("111.111.111-11")).toThrow(new Error("CPF Inválido"));

  });

  it("Create order with three itens", function () {
    const order = new Order("935.411.347-80")
    order.addItem(new Item(1, "Instrumentos Musicais", "Guitarra", 1000), 1);
    order.addItem(new Item(2, "Instrumentos Musicais", "Amplificador", 5000), 1);
    order.addItem(new Item(3, "Instrumentos Musicais", "Cabo", 30), 3);
    const total = order.getTotal();
    expect(total).toBe(6090);
  })

  it("Create order with three itens and coupon", function () {
    const order = new Order("935.411.347-80")
    order.addItem(new Item(1, "Instrumentos Musicais", "Guitarra", 1000), 1);
    order.addItem(new Item(2, "Instrumentos Musicais", "Amplificador", 5000), 1);
    order.addItem(new Item(3, "Instrumentos Musicais", "Cabo", 30), 3);
    const coupon = new Coupon("VALE20", 20);
    order.addCupon(coupon)
    const total = order.getTotal();
    expect(total).toBe(4872);
  })

  it("Create order with three itens and coupon expired", function () {
    const order = new Order("935.411.347-80", new Date("2022-03-30T23:59:59"))
    order.addItem(new Item(1, "Instrumentos Musicais", "Guitarra", 1000), 1);
    order.addItem(new Item(2, "Instrumentos Musicais", "Amplificador", 5000), 1);
    order.addItem(new Item(3, "Instrumentos Musicais", "Cabo", 30), 3);
    const coupon = new Coupon("VALE20", 20, new Date("2021-03-01T10:00:00"));
    order.addCupon(coupon)
    const total = order.getTotal();
    expect(total).toBe(6090);
  })


  it("Create order with three itens and calculate freight", function () {
    const order: Order = new Order("935.411.347-80")
    order.addItem(new Item(1, "Instrumentos Musicais", "Guitarra", 1000, new Dimension(100, 30, 10), 3), 1);
    order.addItem(new Item(2, "Instrumentos Musicais", "Amplificador", 5000, new Dimension(100, 50, 50), 20), 1);
    order.addItem(new Item(3, "Instrumentos Musicais", "Cabo", 30, new Dimension(10, 10, 10), 1), 3);
    const total = order.getTotal();
    expect(total).toBe(6090 + 30 + 200 + 10 + 10 + 10);//6350
  })

  it("Create order with three itens and calculate freight minimal", function () {
    const order: Order = new Order("935.411.347-80")
    order.addItem(new Item(3, "Instrumentos Musicais", "Cabo", 30, new Dimension(10, 10, 10), 0.9), 1);
    const total = order.getTotal();
    expect(total).toBe(40);
  })

  it("Create order and calculate code", function () {
    const order = new Order("935.411.347-80", new Date("2017-03-01T23:59:00"))
    order.addItem(new Item(1, "Instrumentos Musicais", "Guitarra", 1000), 1);
    order.addItem(new Item(2, "Instrumentos Musicais", "Amplificador", 5000), 1);
    order.addItem(new Item(3, "Instrumentos Musicais", "Cabo", 30), 3);
    expect(order.code.value).toBe("201700000001")
  })
})