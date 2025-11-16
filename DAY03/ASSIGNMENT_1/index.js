import express from 'express';

const app = express();

app.use('/users',(req,res,next)=>{
    console.log("hey i am inside middleware");
    res.send(`<h1>Hey i am inside users page`);
});

app.use('/',(req,res,next)=>{
    console.log("Hey i am inside middleware");
    res.send(`<h1>Hey i am inside home page`);
});

app.listen(3000);