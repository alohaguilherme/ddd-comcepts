import Cpf from "../../src/domain/entity/Cpf"

const INVALIDCPFWITHSAMEDIGITS: string[] = [
  "111.111.111-11",
  "222.222.222-22"

]


describe("Tests from Cpf structure", function () {
  test("Deve testar um cpf válido", function () {
    const cpf = new Cpf("935.411.347-80");
    expect(cpf.getValue()).toBe("935.411.347-80")
  });

  describe.each(INVALIDCPFWITHSAMEDIGITS)("Test a invalid Cpf with digit equals", function (cpf) {
    test(`${cpf}`, function () {
      expect(() => new Cpf(cpf)).toThrow("CPF Inválido")
    })
  });

  test("Test a invalid Cpf with diferent digits", function () {
    const cpf = "123.456.789-99"
    expect(() => new Cpf(cpf)).toThrow("CPF Inválido")
  })
});