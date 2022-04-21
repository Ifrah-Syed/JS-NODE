
const { chownSync } = require('fs');
const http = require('http');
// using http module
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  // above..gives html text in server
  res.setHeader('Content-Type', 'text/html');
  // above..gives output of html in server

  // res.end('Hello World');
  // serving hello world

  // below serving tut.html..copied inside backtick
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>CSS selectors</title>
      <style>
       /* css element selector */
          p{
              color: rgb(230, 133, 116); 
              background-color: rgb(34, 228, 228);
              border: 2px solid red;
          }
          /* css id selector */
          #RedElement
          {
              color: red;
              
          }
         /* css class selector */
          .bgblue
          {
              background-color: slateblue;
          }
          /* css grouping selector */
          footer,span{
               background-color: violet;
          }
      </style>
  </head>
  <body>
      
     <p>para 1</p>
     <p>para 2</p> 
     <p id="RedElement">para 3</p>
     <p id="RedElement" class="bgblue">para 4</p>
     <span>
         this is span
     </span>
     <footer>
         this is footer
     </footer>
  </body>
  </html>`)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});