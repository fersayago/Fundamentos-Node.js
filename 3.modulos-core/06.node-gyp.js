// Para poder crear el modulo en base a hello.cc y binding.gyp
// debemos usar el comando
// ? node-gyp configure
// para que tome las configuraciones de binding
// ? node-gyp build
// luego de la build podemos usar el modulo

const miAddon = require("./nativos/build/Release/addon");

console.log(miAddon);
console.log(miAddon.hello());