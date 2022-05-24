const { exec, spawn } = require('child_process');
//const exec = require('child_process').exec;


// ! EXEC
// exec('node 03.console.js', (err, stdout, sterr) => {
//   if (err) {
//     console.error(err);
//     return false
//   }

//   console.log(stdout);
// });

// ! SPAWN
// permite invocar un proceso nuevo de node.js
let proceso = spawn('ls', ['-la'])

console.log(proceso.pid)
// revisa la conexión
console.log(proceso.connected)

// cuando llegan datos vamos a logearlo
proceso.stdout.on('data', (dato) => {
  //revisa si esta muerto
  console.log(process.killed);
  console.log(dato.toString());
})

proceso.on('exit', () => {
  console.log('El proceso terminó');
  console.log(proceso.killed);
})