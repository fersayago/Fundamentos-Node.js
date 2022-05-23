async function Hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (true) {
        console.log(`Hola, ${nombre}`);
        resolve(nombre);
      } else {
        reject('Error al saludar');
      }
    }, 1000);
  });
}

async function Hablar(nombre) {
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

async function Adios(nombre) {
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

// de esta manera podemos convertir procesos asincronos
// en aparentemente sincronos, pero la función sigue
// siendo asincrona.
async function main(){
  let nombre = await Hola('Async Await');
  await Hablar()
  await Hablar()
  await Hablar()
  await Adios(nombre);
}

console.log('Empezamos proceso...')
main();
console.log('Terminamos proceso...')