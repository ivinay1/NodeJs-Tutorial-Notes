// const fs = require('fs');
import fs from 'fs';

export function requestHandler(req,res) {
     // below we are manipulating the response object and we can manipulate it till res.end()  after which response will be sended hence error will be seen if we try to manipulate after res.end()
    const url = req.url;
    const method = req.method
    if(url === '/'){
         res.setHeader("Content-Type","text/html");
         res.write(`<html>`);
         res.write(`<head><title>Helo</title></head>`);
         res.write(`</html>`);
        return res.end();
    }
    if(url === '/message' && method === `POST`)
    {
        const body = [];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        }); 
        // on method allows us to listen to certain event
        // data event will be fired whenever a new chunk is ready to be read
        // hmm kya kar rahe hai ab data parsing ki jo prakriya jisme data jo hai woh nodejs chunks mein convert karega ek stream of datas mein ab usko peeche yk leke aana usko parse hmm kaise karenge as there is no method for parsing for it in http so we have to manually do it 

        // this will be trigrred when parsing is done
        // these events 'on' will not be immediately executed by node immediately node will register them and as they event trigger occurs it executes them
        return req.on('end',()=>{
            // to interact with those collected chunks we need to buffer them up
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            console.log(parseBody);
            fs.writeFile("hnjihnji no reuwsr hss been explored yet",'/DAY01/dummy',err=>{
                 res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            });
        });

       
    }
         res.setHeader("Content-Type","text/html");
         res.write(`<html>`);
         res.write(`<head><title>Helo</title></head>`);
         res.write(`</html>`);
}

