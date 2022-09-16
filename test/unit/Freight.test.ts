import Dimension from "../../src/domain/entity/Dimension";
import Freight from "../../src/domain/entity/Freight";
import FreightCalculator from "../../src/domain/entity/FreightCalculator"
import Item from "../../src/domain/entity/Item"

describe("Freight tests", function () {

  it("Calculate freight the a item", function () {
    const item = new Item(1, "Instrumentos musicais", "Guitarra", 1000, new Dimension(100, 30, 10), 3);
    const freight = new Freight()
    freight.addItem(item, 2)
    expect(freight.getTotal()).toBe(60)
  })

  it("Calculate freight minimal the a item", function () {
    const item = new Item(3, "Instrumentos Musicais", "Cabo", 30, new Dimension(10, 10, 10), 0.9);
    const freight = new Freight()
    freight.addItem(item, 1)
    expect(freight.getTotal()).toBe(10)
  })
})