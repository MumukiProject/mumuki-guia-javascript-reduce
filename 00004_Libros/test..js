it(escapeHtml("Si hacemos enlistar('JavaScript for Kids: A Playful Introduction to Programming','Composing Software','Eloquent JavaScript: A Modern Introduction to Programming') retorna '<li>JavaScript for Kids: A Playful Introduction to Programming</li><li>Composing Software</li><li>Eloquent JavaScript: A Modern Introduction to Programming</li>'"), function() {
  let resultado = enlistar([
'JavaScript for Kids: A Playful Introduction to Programming','Composing Software','Eloquent JavaScript: A Modern Introduction to Programming'
])
  assert.deepEqual(resultado, '<li>JavaScript for Kids: A Playful Introduction to Programming</li><li>Composing Software</li><li>Eloquent JavaScript: A Modern Introduction to Programming</li>'
}))

it(escapeHtml("Si hacemos enlistar(['La insoportable levedad del ser','Socorro','Un lobo estepario', 'Como agua para chocolate']) retorna '<li>La insoportable levedad del ser</li><li>Socorro</li><li>Un lobo estepario</li><li>Como agua para chocolate</li>'"), function(){
  let resultado = enlistar(['La insoportable levedad del ser','Socorro','Un lobo estepario', 'Como agua para chocolate']);
  assert.deepEqual(resultado,'<li>La insoportable levedad del ser</li><li>Socorro</li><li>Un lobo estepario</li><li>Como agua para chocolate</li>'
})
it(escapeHtml("Si hacemos enlistar('Fundación','Los desposeídos', 'Ensayo sobre la ceguera') retorna '<li>Fundación</li><li>Los desposeídos</li><li>Ensayo sobre la ceguera</li>"), function(){
  let resultado = enlistar(['Fundación','Los desposeídos', 'Ensayo sobre la ceguera']);
  assert.deepEqual(resultado,'<li>Fundación</li><li>Los desposeídos</li><li>Ensayo sobre la ceguera</li>'
}))


function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}