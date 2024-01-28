import express from 'express';
const app=express()
const port=8001;
app.get('/',(req,res)=>{
    res.send("Hello Deepak Kanoujiya");
});
app.get('/about',(req,res)=>{
    res.send("This is abput page");
});

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})
