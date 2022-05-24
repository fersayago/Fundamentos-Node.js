const sharp = require('sharp');


// modificar una imagen
sharp('original.png')
  .resize(80) // modifica tamaño
  .grayscale() // escala de grises
  .toFile('resizedOriginal.png') // nombre de la imagen output