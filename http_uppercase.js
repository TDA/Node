/**
 * Created by schandramouli on 6/22/15.
 */
var port = process.argv[2];
var http = require('http');
var map = require('through2-map');

var server = http.createServer(function(req,res){
  if (req.method != 'POST')
    return res.end('send me a POST\n')

  res.writeHead(200, {'content-type': 'text/plain' });
  var stream = req.pipe(map(function(chunk){ return chunk.toString().toUpperCase(); })).pipe(res);
});
server.listen(port);