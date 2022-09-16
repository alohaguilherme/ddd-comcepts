import PostgreSQLConnectionAdapter from "../../src/infra/database/PostgreSQlConnectionAdapter";
import ItemRepositoryDatabase from "../../src/infra/repository/database/ItemRepositoryDatabase";
import ItemRepositoryMemory from "../../src/infra/repository/memory/ItemRepositoryMemory";
ItemRepositoryMemory

describe('ItemRepository DB integration tests', function () {
  it("test item repository methods", async function () {
    const connection = new PostgreSQLConnectionAdapter();
    // const itemRepository = new ItemRepositoryDatabase(connection)
    const itemRepository = new ItemRepositoryMemory()
    const item = await itemRepository.getById(1);
    expect(item?.description).toBe("Guitarra");
    // await connection.close()
  });
});