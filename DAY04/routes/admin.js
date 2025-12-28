import express from 'express';
import path from 'path';
import { pathParent } from '../utils/path.js';

// for good pracitce split the code on functionality like do routing so split routing code into multiple files and then import it


export const router = express.Router();

export const products = [];

// registering routes to router

router.get('/add-product',(req,res,next)=>{
    console.log('In the middleware');
    res.render('addProduct',{pageTitle: "Add Product",path: "/admin/add-product",productCSS: true});
});
 
router.post('/add-product',(req,res,next)=>{
    // console.log(req.body);
    products.push({title: req.body.title});
    res.redirect('/');
})


// module.exports = router;
