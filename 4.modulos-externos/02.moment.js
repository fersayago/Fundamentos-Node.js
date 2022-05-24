const moment = require('moment');

// muestra la fecha
let ahora = moment()

console.log(ahora.toString());

// formatear la fecha
console.log(ahora.format('YYYY/MM/DD - HH:mm'))