// nombramos una variable que vamos a introducir por comando
// le agregamos una opción por defecto
let nombre = process.env.NOMBRE || 'sin nombre';

console.log(`Hola ${nombre}`);

// ! PARA DECLARAR NOMBRE POR ENTORNO:
// $env:NOMBRE="Carlos"; node 02.entornos.js

let web= process.env.WEB || 'no tengo web';

console.log(`Mi web es ${web}`)

// las variables de entorno se escriben en mayuscula
// y divididas por guion bajo por convención
// y de la siguiente manera
// MI_VARIABLE_ENTORNO