const os = require('os');

console.log(os.arch());
console.log(os.platform());

// ver los cpus y su información
// console.log(os.cpus())

// ver los errores y señales del sistema
//console.log(os.constants);

const SIZE = 1024;
function kb(bytes) { return bytes / SIZE }
function mb(bytes) { return kb(bytes) / SIZE }
function gb(bytes) { return mb(bytes) / SIZE }
// memoria libre que tenemos
console.log(os.freemem());
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

// memoria total
console.log(os.totalmem())

//directorio personal
console.log(os.homedir());

//directorio temporal
console.log(os.tmpdir());

//nombre de mi pc
console.log(os.hostname());

//ver todas las interfaces de red a las que esta conectado
//console.log(os.networkInterfaces());
