let suma = 0;

// tiempo de ejecución
console.time('todo');

console.time('bucle1');
for (let i =0 ; i < 4000000000; i++) {
    suma++;
}
console.timeEnd('bucle1');

console.time('bucle2');
for (let j =0 ; j < 2000000000; j++) {
    suma++;
}
console.timeEnd('bucle2');

console.time('asincrona');
console.log('comienza el bucle asincrono');
asincrona().then(() => {  
  console.timeEnd('asincrona');
});

console.timeEnd('todo');


function asincrona(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('termina el bucle asioncrónico');
            resolve()
        }, 1000);
    });
};