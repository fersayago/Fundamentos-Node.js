const fs = require('fs');

function Leer(ruta, miCallback){
  fs.readFile(ruta, (err, data) => {
    // Leido
    miCallback(data.toString());
  })
}

Leer(__dirname + "/archivo.txt", console.log)

function Escribir(ruta, contenido, miCallback){
  fs.writeFile(ruta, contenido, (err, data) => {
    if (err){
      console.error('No he podido escribirlo', err);
    } else{
      console.log('Se ha escrito correctamente')
    }
  })
}

Escribir(__dirname + '/archivo1.txt', 'Soy un archivo creado desde fs.writeFile')

function Borrar(ruta, miCallback){
  fs.unlink(ruta, miCallback);
}

Borrar(__dirname + '/archivo1.txt', console.log)