// MISMA SEMANTICA EN CONSOLA NODE
// console.log('Algo');
// console.info('Lo mismo por ahora');
// console.error('Algún error')
// console.warn('warn')

// TABLE
// permite crear tablas al recibir un objeto

var tabla = [
  {
    number: 1,
    letter: 'X'
  },
  {
    number: 2,
    letter: 'Y'
  },
  {
    number: 3,
    letter: 'Z'
  }
]

console.table(tabla)

// GROUP
// Agrupa los logs con indentación

console.group('conversacion')
console.log('pregunta')
console.log('respuesta')
console.log('saludo')
console.groupEnd('conversacion')

function function1(){
  console.group('funcion 1')
  console.log('Esto es de la funcion 1');
  console.log('Esto también')
  function2();
  console.log('Hemos vuelto a la 1')
  console.groupEnd('funcion 1')
}

function function2(){
  console.group('funcion 2')
  console.log('Ahora estamos en la función 2')
  console.groupEnd('funcion 2')
}

console.log('empezamos')
function1();

// CONTADOR
// util para ver cuantas veces pasa por un loop

console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');