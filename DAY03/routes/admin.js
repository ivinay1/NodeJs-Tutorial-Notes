import express from 'express';
import path from 'path';
import { pathParent } from '../utils/path.js';

// for good pracitce split the code on functionality like do routing so split routing code into multiple files and then import it


export const router = express.Router();

// registering routes to router

router.post('/add-product',(req,res,next)=>{
    console.log('In the middleware');
    res.sendFile(path.join(pathParent,'views','addProduct.html'));
});
 
router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})


// module.exports = router;
