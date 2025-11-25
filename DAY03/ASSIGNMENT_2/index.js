import express from 'express';
import bodyParser from 'body-parser';

import 

const app =  express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/users',); // route for users

app.use();  // route for normal users

app.use(); // error 404

app.listen(3000);
