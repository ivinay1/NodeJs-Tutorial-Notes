import express from 'express';

export const Router = express.Router();

Router.get('/profile',(req,res,next)=>{
    res.sendFile();
})
