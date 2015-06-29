/**
 * Created by schandramouli on 6/22/15.
 */
var port = process.argv[2];
var http = require('http');
var url = require('url');
var server = http.createServer(function(req,res){
  // logic for time server
  res.writeHead(200, {'content-type': 'application/json'});
  var u = url.parse(req.url,true);
  //('/api/parsetime',function(req,res){
  if(u.pathname == '/api/parsetime')
    res.end(json_time(u.query.iso));
  else if(u.pathname == '/api/unixtime')
    res.end(unix_time(u.query.iso));
  //console.log();

});


server.listen(port);


function json_time(date){
  var d = new Date(date);
  return JSON.stringify({
    "hour": d.getHours(),
    "minute": d.getMinutes(),
    "second": d.getSeconds()
  });
}

function unix_time(date){
  var d = new Date(date);
  return JSON.stringify({
    "unixtime": d.
  });
}
