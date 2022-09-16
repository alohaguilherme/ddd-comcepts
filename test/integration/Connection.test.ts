import PostgreSQLConnectionAdapter from "../../src/infra/database/PostgreSQlConnectionAdapter";

describe('Database Integration Tests', function () {
  it("test connection with the database", async function () {
    const connection = new PostgreSQLConnectionAdapter();
    const items = await connection.query("select * from ccca.item", []);
    expect(items).toHaveLength(3)
    await connection.close();
  });
});