import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import { router as adminRoutes } from './routes/admin.js';

import {router as userRoutes} from './routes/shop.js';
import { pathParent } from './utils/path.js';
// import expressHbs from 'express-handlebars';

// creating an express application
const app = express(); 

// request goes from top to bottom

app.use(express.static(path.join(pathParent,'public')));


app.use(bodyParser.urlencoded({extended: false}));

// be default req does not parse the incoming request it gives us the property of req.body but unable to parse it so we can access the body but unable to parse so we use another niddleware to parse it 

// in views folder we store what we want to serve to the user that could be a html page


// app.engine('handlebars', expressHbs.engine({
//     defaultLayout: 'main-layout',
//     layoutsDir: 'views/layouts/' 
//   })); //registers a template engine with Express.

app.set('view engine','ejs') // It set handlebar as a engine

//app.set('view engine','pug'); // we are saying here to use this templating engine 'pug' whenever we try to render a template , but we have to render the template first then only it will do so , we can render the template using res.render() method provided by express to render the template
app.set('views','views/EJS');


// registering the admin routes
// filtering paths
app.use('/admin',adminRoutes);

// registering the user routes
app.use(userRoutes);


app.use((req,res,next)=>{
   res.status(404).render('404',{pageTitle: "Error 404 "})
});


app.listen(3000);