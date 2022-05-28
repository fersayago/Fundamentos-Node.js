const puppeteer = require('puppeteer');

// todo puppeteer es asincrono

(async () => {
  // Nuestro codigo va aquí
  console.log('lanzamos un navegador')
  // const browser = await puppeteer.launch()
  const browser = await puppeteer.launch({
    headless: false,
  })

  const page = await browser.newPage()
  await page.goto('https://es.wikipedia.org/wiki/Node.js')

  var titulo1 = await page.evaluate(() => {
    const header = document.querySelector('h1')
    return header.innerHTML;
  })

  console.log(titulo1);

  console.log('cerramos el navegador');
  browser.close();
  console.log('navegador cerrado');
})();