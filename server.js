// Your server code goes here. Host your server on localhost:3000

const http = require('http');
const fs = require('fs');

const server = http.createServer(function(request, response){

    if(request.url === '/' || request.url === '/index.html'){
        fs.readFile('index.html', function(error,data){
            if(error){
                response.writeHead(500);
                response.end('Error Reading File');
            } else{
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end(data);
            }
        });
    } else{
        response.writeHead(404);
        response.end('Page Not Found');
    }
});

server.listen(3000, function(){
    console.log('Server is running at http://localhost:3000');
});