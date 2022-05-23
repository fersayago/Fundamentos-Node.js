function otraFuncion(){
  seRompe();
}

function seRompe(){
  return 3 + z
}


// las funciones asincronas se ejecutan en otro hilo por lo que
// no hay forma de detectar desde el loop principal el error con
// el try catch. En este caso lo mas logico es meter el try
// cath dentro de la función asincrona misma
function seRomeAsincrona(cb){
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (err) {
      console.error('Error en mi función asincrona')
      cb(err);
    }
  })
}

try {
  //otraFuncion()
  seRomeAsincrona(function(err){
    console.log(err.message);
  })
} catch (err) {
  console.error('Error del tipo \n' + err.message);
  //console.error(err);
}