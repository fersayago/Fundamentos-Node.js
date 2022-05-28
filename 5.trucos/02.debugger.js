// para usar el debugger debemos agregar --inspect al nodemon
// nodemon --inspect 02.debugger.js
// podemos ver el inspector desdede la consola de chrome
// chrome://inspect

// el inspect nos permite debugger el archivo que se esta ejecutando
// para poder agregar breakpoints y ver el codigo en tiempo real
// tambien podemos usar el watch para cambios en variables

const http = require('http');

const port = 3000;


const router = (req, res) => {
  console.log('nueva petición');
  console.log(req.url);

  switch(req.url){
    case '/hola':
      let saludo = hola();
      res.write(saludo)
      res.end()
      break
    default:
      res.write('error 404: No se lo que quieres')
      res.end
  }
  
  res.end();
}

function hola(){
  return 'Hola, que tal?'
}

http.createServer(router).listen(port);

console.log(`Escuchando HTTP en el puerto ${port}`)