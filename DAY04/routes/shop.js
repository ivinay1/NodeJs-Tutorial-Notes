import express from 'express';

import path from 'path';
import { pathParent } from '../utils/path.js';

export const router = express.Router();

router.get('/',(req,res,next)=>{
    console.log(" i am under user routes");
    res.sendFile(path.join(pathParent,'views','shop.html'));
});

// __dirname this is a global variable that holds the absolute path on our OS to the current folder
// using or interacting with paths using the path module will give us the ability to execute our code in any OS as file system in diff diff OS have diff structures so we use path module which will construct/build and interact with the paths

// __dirname give the path of the current folder (routes)