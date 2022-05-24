const http = require('http');

const port = 3000;


const router = (req, res) => {
  console.log('nueva petición');
  console.log(req.url);

  switch(req.url){
    case '/hola':
      res.write('Hola, que tal?')
      res.end()
      break
    default:
      res.write('error 404: No se lo que quieres')
      res.end
  }
  
  // res.writeHead(201, {'content-type': 'text/plain' })
  
  // // respuesta al usuario
  // res.write('Hola desde servidor HTTP en Node.js')
  
  res.end();
}

http.createServer(router).listen(port);

console.log(`Escuchando HTTP en el puerto ${port}`)