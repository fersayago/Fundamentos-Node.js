const bcrypt = require('bcrypt');

const password = '1234ContraseñaSegura!'

// @ params: -password
//           -numero de rondas que va a dar para crear el hash
//           -función
bcrypt.hash(password, 5, (err, hash) => {
  console.log(hash);

  // Dice si una password puede generar un hash
  bcrypt.compare(password, hash, (err, res) =>{
    console.log('Password correspone a hash -> ' + res);
  })
})
