function Hola(nombre, miCallback){
  setTimeout(function(){
    console.log(`Hola, ${nombre}`); // 2°
    miCallback(nombre);
  }, 1000);
}

function Hablar(callbackHablar){
  setTimeout(function() {
    console.log("bla bla bla bla...")
    callbackHablar();
  }, 1000)
}

function Adios (nombre, otroCallback){
  setTimeout(function(){
    console.log(`Adios, ${nombre}`)
    otroCallback();
  }, 1000)
}

// Funciones intermedias que crean funcionalidades especificas
function Conversacion(nombre, veces, callback){
  // usamos recursividad
  if (veces >= 0){
    Hablar(function(){
      Conversacion(nombre, --veces, callback);
    })
  } else {
    Adios(nombre, callback);
  }
}

console.log('iniciando proceso...');
Hola('Fernando', function(nombre){
  Conversacion(nombre, 3, function(){
    console.log('proceso terminado...')
  })
})

// ! CALLBACK HELL
/* Hola('Fernando', function(nombre){
  Hablar(function() {
    Hablar(function() {
      Adios(nombre, function(){
        console.log('terminando proceso...');
      })
    })
  })
}); */