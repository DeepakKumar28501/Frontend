import http from 'http';
import fs, { readFileSync } from 'fs';
const port=process.env.PORT || 8000;
// set a port where my node server is run either you can set on put port 
const server=http.createServer((req,res)=>{
    console.log(req.url);
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
     if(req.url=='/about'){
        res.statusCode=200;
        res.end('<h1>This is Deepak Knoujiya</h1><p>Hey this is the way to rock the world!</p>');
     }
    else if(req.url=='/'){
        res.statusCode=200;
        const data=fs.readFileSync('index.html');
        res.end(data.toString());


    }
    else if(req.url=='/hello'){
        res.statusCode=200;
        res.end('<h1>About  Deepak Knoujiya</h1><p>Hey this is the way to rock the world!</p>');

    }
    else{
        // res.dee();
        res.statusCode=404;
        res.end('<h1>Page not found</h1><p>Hey this is the way to rock the world!</p>');
    }
})
server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});