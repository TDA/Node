/**
 * Created by schandramouli on 6/22/15.
 */
var net = require('net');
var server = net.createServer(function(socket){
  // logic for time server
  var d = new Date();
  var data = d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  data += ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes()) + '\n';
  socket.end(data.toString());
});

server.listen(process.argv[2]);

function pad(n){
  if(n < 10)
    return '0'+n;
  else
    return n;
}