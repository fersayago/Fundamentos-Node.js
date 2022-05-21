function Hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (true) {
        console.log(`Hola, ${nombre}`); // 2°
        resolve(nombre);
      } else {
        reject('Error al saludar');
      }
    }, 1000);
  });
}

// recibe nombre para pasarlo como parametro a la callback adios
function Hablar(nombre) {
  return new Promise ((resolve, reject) => {
    setTimeout(function () {
      if (true){
        console.log('bla bla bla bla...');
        resolve(nombre);
      } else {
        reject("Error al saludar");
      }
    }, 1000);
  })
}

function Adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (true){
        console.log(`Adios, ${nombre}`);
        resolve();
      } else {
        reject('Hay un error');
      }
    }, 1000);
  });
}

function Conversacion(nombre, veces, callback) {
  if (veces >= 0) {
    Hablar(function () {
      Conversacion(nombre, --veces, callback);
    });
  } else {
    Adios(nombre, callback);
  }
}

console.log('iniciando proceso...');
Hola('Fernando')
  .then(Hablar)
  .then(Hablar)
  .then(Hablar)
  .then(Hablar)
  .then(Adios)
  .then((nombre) => {
    console.log('terminado el proceso');
  })
  .catch((error) => {
    console.error('ha habiado un error');
    console.error(error);
  });
