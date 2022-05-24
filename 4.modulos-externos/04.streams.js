const fs = require('fs');
const stream = require('stream')
const util = require('util')

let data = '';


//archivo que vamos a leer
let readableStream = fs.createReadStream(__dirname + '/input.txt');

/*
// si ya sabemos que tipo de chunk vamos a recibir, podemos definir
// el encoding para que muestre el valor convertido y no hexadecimal
readableStream.setEncoding('utf-8');

// recibe chunk de datos
readableStream.on('data',(chunk) => {
  // a medida que importamos chunks lo añadimos a data
  data += chunk;
})

// hacer un print final en vez de uno por cada vez que se lee un chunk
// ayuda con la velocidad al usar la memoria
readableStream.on('end', () => {
  console.log(data);
})
*/

const Transform = stream.Transform;

function Mayus(){
  Transform.call(this);
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunk, codif, cb) {
  chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus);
  cb()
}

let mayus = new Mayus();

readableStream
  .pipe(mayus)
  .pipe(process.stdout);