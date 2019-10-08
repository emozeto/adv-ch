var http = require('http'),
    fileSystem = require('fs'),
    path = require('path');

http.createServer(function(request, response) {
    

    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'Access-Control-Max-Age': 2592000, // 30 days
        /** add other headers as per requirement */
      };
    
      if (request.method === 'OPTIONS') {
        response.writeHead(204, headers);
        response.end();
        return;
      }
    
      if (['GET', 'POST'].indexOf(request.method) > -1) {
        var filePath = path.join(__dirname, './file.csv');
        var stat = fileSystem.statSync(filePath);

        response.writeHead(200, {
            'Content-Type': 'text/csv',
            'Content-Length': stat.size
        }, headers);
        response.end();
        // var readStream = fileSystem.createReadStream(filePath);
        // // We replaced all the event handlers with a simple call to readStream.pipe()
        // readStream.pipe(response);
        return;
      }
    
      response.writeHead(405, headers);
      response.end(`${request.method} is not allowed for the request.`);
})
.listen(2000);