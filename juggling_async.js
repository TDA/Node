/**
 * Created by schandramouli on 6/19/15.
 */
var http = require('http');
var urls = [process.argv[2], process.argv[3], process.argv[4]];
var full_string;
http.get(urls[0],function(response){
  response.setEncoding('utf-8');
  var str = '';
  response.on('data',function(data){
    str+=data;
  });
  response.on('error',function(err){
    console.log("error occurred" + err);
  });
  response.on('end',function(){
    // console.log(str.length);
    console.log(str);
    http.get(urls[1],function(res) {
      res.setEncoding('utf-8');
      var str = '';
      res.on('data', function (data) {
        str += data;
      });
      res.on('error', function (err) {
        console.log("error occurred" + err);
      });
      res.on('end', function () {
        // console.log(str.length);
        console.log(str);
        http.get(urls[2], function (res) {
          res.setEncoding('utf-8');
          var str = '';
          res.on('data', function (data) {
            str += data;
          });
          res.on('error', function (err) {
            console.log("error occurred" + err);
          });
          res.on('end', function () {
            // console.log(str.length);
            console.log(str);
          });
        });
      });
    });
  });
});
