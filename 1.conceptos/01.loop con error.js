console.log('primera instrucción');

let i = 0;

setInterval (function() {
  // bucle infinito:
  console.log(i);
  i++

  //rompemos el bucle con un error (no declarar la variable z)
  //que detiene todos los hilos de Node
  if (i === 5){
    console.log('forzamos error')
    var a=3 + z;
  }
}, 1000)

//se ve esto antes que el setInterval ya que el intervalo es asincrono
console.log('Segunda instrucción')