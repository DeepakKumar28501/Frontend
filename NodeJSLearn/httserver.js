import http from 'http';
const port=process.env.PORT || 7000;
// set a port where my node server is run either you can set on put port 
const server=http.createServer((req,res)=>{
    console.log(req.url);
     res.statusCode=200;
     res.setHeader('Content-Type','text/html');
     res.end('<h1>This is Deepak Knoujiya</h1><p>Hey this is the way to rock the world!</p>');
})
server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});