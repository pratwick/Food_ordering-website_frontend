const http = require('http');
const fs =require('fs');

const hostname = '127.0.0.1';
const port=3000;

const home =      fs.readFileSync('home.html');
const aboutus =   fs.readFileSync('aboutus.html');
const services =  fs.readFileSync('services.html');
const contactus = fs.readFileSync('contactus.html');

const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('Hello world');
});

server.listen(port,hostname,()=>{
   console.log('server running at http://${hostname}:${port}/');
});

