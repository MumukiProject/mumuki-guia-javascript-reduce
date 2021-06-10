describe("", function() {
  it("Si hacemos sumaDeLosDoblesPositivos([2, -4, 6, 0, 5, -1]) retorna 26", function() {
      let resultado = sumaDeLosDoblesPositivos([2, -4, 6, 0, 5, -1]);
      assert.equal(resultado, 26);
  })
});

describe("", function() {
  it("Si hacemos sumaDeLosDoblesPositivos([5, 4, 8, 1, -3, -1]) retorna 36", function() {
      let resultado = sumaDeLosDoblesPositivos([5, 4, 8, 1, -3, -1]);
      assert.equal(resultado, 36);
  })
});

describe("", function() {
  it("Si hacemos sumaDeLosDoblesPositivos([-5, -4, -8, -1, -3, 0]) retorna 0", function() {
      let resultado = sumaDeLosDoblesPositivos([-5, -4, -8, -1, -3, 0]);
      assert.equal(resultado, 0);
  })
});
