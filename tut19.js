// SERVING HTML FILES

const http = require('http') ;
const fs = require('fs');
const fileContent= fs.readFileSync('tut5.html')

// creating server
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    //sends response headers to the request..browser will know its a html file
    // 200 is the response code
    res.end(fileContent)
     // if data is specified,here file content, it is similar to calling response.write(data,encoding) followed by response.end(callback)

})

server.listen(8000,'127.0.0.1',()=>{
    console.log("listening on port 80")
})
// port=80,, 127.0.0.1 is local host