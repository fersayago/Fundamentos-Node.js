function Hola(nombre, miCallback){
  setTimeout(function(){
    console.log(`Hola, ${nombre}`); // 2°
    miCallback(nombre);
  }, 1000);
}

function Adios (nombre, otroCallback){
  setTimeout(function(){
    console.log(`Adios, ${nombre}`) // 3°
    otroCallback();
  }, 1000)
}

console.log('iniciando proceso...'); // 1°
Hola('Fernando', function(nombre){
  Adios(nombre, function(){
    console.log('terminando proceso...'); // 4°
  })
});