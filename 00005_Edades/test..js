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

describe("", function() {
  it("Si hacemos sumaDeEdades(personas) en donde personas es un array que contiene a Aang de 112 años, Katara de 14 y Suki de 15 años retorna 141", function() {
      let personas = [
        {nombre: "Aang", 
        edad: 112
        }, 
        {nombre: "Katara", 
        edad: 14
        },
        {nombre: "Suki", 
        edad: 15
        },
      ];
      let resultado = sumaDeEdades(personas);
      assert.equal(resultado, 141);
  })
});