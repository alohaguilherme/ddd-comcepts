import SimulateFreight from "../../src/application/usecase/simulate-freight/SimulateFreight";
import RepositoryFactory from "../../src/domain/factory/RepositoryFactory";
import Connection from "../../src/infra/database/Connection";
import PostgreSQLConnectionAdapter from "../../src/infra/database/PostgreSQlConnectionAdapter";
import MemoryRepositotyFactory from "../../src/infra/factory/MemoryRepositoryFactory";


describe('Simulate Freight', function () {
  let connection: Connection;

  let repositoryFactory: RepositoryFactory;

  beforeEach(function () {
    connection = new PostgreSQLConnectionAdapter()
    repositoryFactory = new MemoryRepositotyFactory()
  });

  it("Simulate freight for order", async function () {
    const simulateFreight = new SimulateFreight(repositoryFactory);
    const simulateFreightInput = {
      orderItems: [
        { idItem: 1, quantity: 1 },
        { idItem: 2, quantity: 1 },
        { idItem: 3, quantity: 3 }
      ],
    };
    const output = await simulateFreight.execute(simulateFreightInput);
    expect(output.total).toBe(260);
  });

  afterEach(async function () {
    await connection.close()
  })
}) 