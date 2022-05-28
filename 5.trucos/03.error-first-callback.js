// patrón de diseño que establece que el error va primero y
// el resultado después. Se debe usar siempre que se
// utilicen funciones asincronas.

function asincrona(miCallback) {
  // codigo asincrono
  setTimeout(() => {
    try{
      let a = 3 + z;
      miCallback(null, a);
    } catch (e){
      miCallback(e);
    }
  }, 1000);
}

asincrona(function(err, dato){
  if (err) {
    console.log('Error: ', err.message);
    return false;

    //throw err; // NO VA A FUNCIONAR
  } else {
    console.log('Dato: ', dato);
  }
})