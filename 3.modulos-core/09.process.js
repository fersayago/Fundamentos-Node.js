const process = require('process');

process.on('beforeExit', () => {
  console.log('El proceso va a terminar')
});

// ya esta desconectado del event loop todo lo que agreguemos
// debe ser sincrono
process.on('exit', () => {
  console.log('El proceso acabo')
  setTimeout(() => {
    console.log('Esto no se va a ejecutar nunca')
  }, 0);
});

//escuchar cuando hay una excepcion que nadie ha capturado
process.on('uncaughtException', (err, origen) => {
  console.log('Vaya no se capturó el error')
  console.log(err.message)
  setTimeout(() => {
    console.log('Esto viene desde las excepciones')
  }, 0);
})

//para promesas que se han rechazado y nadie tiene un catch
process.on('unhandledRejection', (err, origen) => {
  console.log('Vaya se rechazo la promesa')
  console.error(err);
})

funcionQueNoExiste();

console.log('Si el error no se ataja, no sale este log')