import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import { router as adminRoutes } from './routes/admin.js';

import {router as userRoutes} from './routes/shop.js';
import { pathParent } from './utils/path.js';

// creating an express application
const app = express(); 

// request goes from top to bottom

// use allows us to add a middleware functions
// it is pretty flexible and accepts an array of request handlers
// pass a simple function to it and this function will contain three arguements request object,response object and next arguement
//  next(); // allows to go to the next middleware in the funnel

//parsing is a mandaotry thing so it should be done no matter where request is being handled so 

app.use(express.static(path.join(pathParent,'public')));

// regietrs a middleware and also callls next after parsing automatically
// it will do whole request parsing like which we have to do manually on our own prev although it will not parse all kind of data like JSON, files etc.., but it will parse the form data
// sent throught form for diff thing we have diff parsers like for json diff file diff
app.use(bodyParser.urlencoded({extended: false}));

// be default req does not parse the incoming request it gives us the property of req.body but unable to parse it so we can access the body but unable to parse so we use another niddleware to parse it 

// in views folder we store what we want to serve to the user that could be a html page

// registering the admin routes
// filtering paths
app.use('/admin',adminRoutes);

// registering the user routes
app.use(userRoutes);

// sending the response should be the last call you also need to set the header or status code
// here we have nor registered 404 page to any route as if any route other than our defined routes is registered then it might come to 404 page na that why we have refistered it to no route and as last middleware as middlewares follow top to down apprach while executing

app.use((req,res,next)=>{
   res.status(404).sendFile(path.join(pathParent,'views','404.html'))
});


app.listen(3000);