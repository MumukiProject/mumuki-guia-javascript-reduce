describe("", function() {
  it("Si hacemos sumaDeEdades(personas) en donde personas es un array que contiene a Grace de 6 años, Ada de 19 y Hedy de 34 retorna 59", function() {
      let personas = [
        {nombre: "Grace", 
        edad: 6
        }, 
        {nombre: "Ada", 
        edad: 19
        },
        {nombre: "Hedy", 
        edad: 34
        }
      ];
      let resultado = sumaDeEdades(personas);
      assert.equal(resultado, 59);
  })
});

describe("", function() {
  it("Si hacemos sumaDeEdades(personas) en donde personas es un array que contiene a Wuisti de 29 años, May de 28, Oli de 2 años y Thom Yorke de 52 años retorna 111", function() {
      let personas = [
        {nombre: "Wuisti", 
        edad: 29
        }, 
        {nombre: "May", 
        edad: 28
        },
        {nombre: "Oli", 
        edad: 2
        },
        {nombre: "Tom Yorke", 
        edad: 52
        }
      ];
      let resultado = sumaDeEdades(personas);
      assert.equal(resultado, 111);
  })
});