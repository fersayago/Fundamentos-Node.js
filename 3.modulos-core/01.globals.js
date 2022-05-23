// ! INTERVALOS
let i = 0;
let intervalo = setInterval(function() {
  console.log(`Hola from interval N° ${i+1}`)
  if (i === 3){
    clearInterval(intervalo)
  }
  i++
}, 1000);

setImmediate(function(){
  console.log('Hola from immediate')
})

// ! MODULOS

// require(); -> manejo de modulos
// console.log(process); -> procesos
// console.log(__dirname); -> directorio donde estamos
// console.log(__filename); -> archivo en el que estamos

