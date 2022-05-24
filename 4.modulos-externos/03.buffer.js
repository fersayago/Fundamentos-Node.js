//let buffer = Buffer.alloc(4);
let buffer = Buffer.from([1, 2, 3]);

//console.log(buffer);

let abc = Buffer.alloc(26);

for (let i = 0; i < 26; i++){
  // le da a cada posicion del buffer un numero equivalente a cada letra
  // del abecedario
  abc[i] = i + 97;
}

// posiciones de letra en codigo hexadecimal
console.log(abc);
// abecedario
console.log(abc.toString());