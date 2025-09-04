import sumar, { calcularNeto } from "./Monto.js";

describe("calcular", () => {
  it("deberia calcular el precio y cantidad y dar el monto ", () => {
    expect(calcularNeto(3, 2)).toEqual(6);
  });
});


