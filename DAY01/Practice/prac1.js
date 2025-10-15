import http from  'http';

function HandleRequest(req,res)
{   
    const url = req.url;
    const method = req.method;

     res.setHeader('Content-Type',`text/html`);
    if(url === '/')
    {
       const form = `<form action="/create-user"method = "POST"><label for="username"></label><input name="username" id="username" type="text" required></input>
        <input type="submit" value="Ok">
       </form>`

        res.write(`<h1>Welcom</h1>`);
        res.write()
        res.end();
    }

    if(url === '/users')
    {
        
        const msg = `<ul>
                        <li>User 1</li>
                        <li>User 2</li>
                        <li>User 3</li>
                        <li>User 4</li>
                    </ul>`
        res.write(msg)
        res.end();
    }

    if(url === '/create-user' && method === "POST")
    {
        const parsedData = [];
        req.on('data',(chunk)=>{
            parsedData.push(chunk);
        })

        const Data = Buffer.concat(parsedData).toString();
        const resutData = Data.split("=")[1];
        console.log(resutData);
    }
}

const server = http.createServer(HandleRequest);

server.listen(3000);

