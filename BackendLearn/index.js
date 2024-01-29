const express =require('express');
require('dotenv').config()
const app=express();
// const port=4000;
app.get('/',(req,res)=>{
    res.send("Hello World!");
})

app.get('/twitter',(req,res)=>{ 
    res.send('Hello Deepak');
});
app.get('/login',(req,res)=>{
    res.send('<h1>Please Login first</h1>');
});
app.get('/youtube',(req,res)=>{
    res.send('<h2>Youtube.com</h2>');
})
// app.listen(process.env.PORT,()=>{ if we not use dotenv then use this systex}
app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${process.env.PORT}`);
})
console.log("Basic backend app");