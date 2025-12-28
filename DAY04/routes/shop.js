import express from 'express';

import path from 'path';
import { pathParent } from '../utils/path.js';

import { products } from './admin.js';

export const router = express.Router();

router.get('/',(req,res,next)=>{
    res.render('shop',{prods: products,pageTitle: 'Shop',path: '/',hasProducts: products.length > 0,activeShop:true,productCSS: true}) // don't need to write shop.pug as it is defined here that default engine is pug so render will render the file present in the views folder with extension as pug and name as 'shop'
    // render method also allows us to pass the data which we want to pass to the view
});

