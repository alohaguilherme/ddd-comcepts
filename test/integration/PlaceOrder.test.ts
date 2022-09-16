import PlaceOrder from "../../src/application/usecase/place-order/PlaceOrder";
import PostgreSQLConnectionAdapter from "../../src/infra/database/PostgreSQlConnectionAdapter";
import Connection from "../../src/infra/database/Connection";
import RepositoryFactory from "../../src/domain/factory/RepositoryFactory";
import MemoryRepositotyFactory from "../../src/infra/factory/MemoryRepositoryFactory";
import DatabaseRepositoryFactory from "../../src/infra/factory/DatabaseRepositoryFactory";

describe("Place Order tests", function () {
  let connection: Connection;
  let repositoryFactory: RepositoryFactory;

  beforeEach(function () {
    connection = new PostgreSQLConnectionAdapter()
    repositoryFactory = new DatabaseRepositoryFactory(connection)
    repositoryFactory = new MemoryRepositotyFactory()
  });

  it("Should be do Order", async function () {
    const placeOrder = new PlaceOrder(repositoryFactory);
    const placeOrderInput = {
      cpf: "935.411.347-80",
      orderItems: [
        { idItem: 1, quantity: 1 },
        { idItem: 2, quantity: 1 },
        { idItem: 3, quantity: 3 },
      ],
      coupon: "VALE20"
    }
    const output = await placeOrder.execute(placeOrderInput);
    expect(output.total).toBe(5132)
  });

  it("Should be do Order calculate the code", async function () {
    const placeOrder = new PlaceOrder(repositoryFactory);
    const placeOrderInput = {
      cpf: "935.411.347-80",
      orderItems: [
        { idItem: 1, quantity: 1 },
        { idItem: 2, quantity: 1 },
        { idItem: 3, quantity: 3 },
      ],
      coupon: "VALE20",
      issueDate: new Date("2017-03-01T23:59:00")
    };
    await placeOrder.execute(placeOrderInput)
    const output = await placeOrder.execute(placeOrderInput);
    expect(output.code).toBe("201700000002")
  });

  afterEach(async function () {
    await connection.close()
  })
})