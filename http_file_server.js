/**
 * Created by schandramouli on 6/22/15.
 */
var port = process.argv[2];
var loc = process.argv[3];

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
  res.writeHead(200, {'content-type': 'text/plain' });
  var rs = fs.createReadStream(loc);
  rs.pipe(res);
});
server.listen(port);