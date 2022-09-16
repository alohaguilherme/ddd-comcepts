import Dimension from "../../src/domain/entity/Dimension";
import Item from "../../src/domain/entity/Item"

describe("Item tests", function () {
  it("Create a item with dimensions", function () {
    const item = new Item(1, "Instrumentos musicais", "Guitarra", 1000, new Dimension(100, 30, 10));
    const volume = item.getVolume();
    expect(volume).toBe(0.03)
  })

  it("Create a item with dimensions and calculate density", function () {
    const item = new Item(1, "Instrumentos musicais", "Guitarra", 1000, new Dimension(100, 30, 10), 3);
    const density = item.getDensity();
    expect(density).toBe(100)
  })
})