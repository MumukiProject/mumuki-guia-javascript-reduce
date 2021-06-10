describe("", function() {
  it("Si hacemos promedio([4, 7, 8, 5, 10]) retorna 6.8", function() {
      let resultado = promedio([4, 7, 8, 5, 10]);
      assert.equal(resultado, 6.8);
  })
});

describe("", function() {
  it("Si hacemos promedio([8, 4, 5, 10, 9]) retorna 7.2", function() {
      let resultado = promedio([8, 4, 5, 10, 9]);
      assert.equal(resultado, 7.2);
  })
});

describe("", function() {
  it("Si hacemos promedio([10, 9, 8, 9]) retorna 9", function() {
      let resultado = promedio([10, 9, 8, 9]);
      assert.equal(resultado, 9);
  })
});
