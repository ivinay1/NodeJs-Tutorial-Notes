const http = require('http');
const path = require('path');

import { requestHandler } from './routes';

function rqListener(req,res){
    
}

const server = http.createServer(rqListener);  // rqListner will listen to each request which comes to the server

// nodejs uses event driven architecutre heavily like if request comes do this

const server2 = http.createServer(function(){

})

const server3 = http.createServer(requestHandler); 

server.listen(3000); // starts a process where nodejs will not immediately exit our script on the other hand nodejs will keep our script running  to listen for incoming requests
// default port 80 listen will take and by default local server 



