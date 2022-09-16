import Dimension from "../../src/domain/entity/Dimension";

describe("Dimension tests", function () {
  it("Create Dimension this a item", function () {
    const dimension = new Dimension(100, 30, 10);
    const volume = dimension.getVolume();
    expect(volume).toBe(0.03);
  })
})