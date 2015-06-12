/**
 * Created by schandramouli on 6/12/15.
 */
var http = require('http');
var url = process.argv[2] || 'http://adamdoupe.com';
http.get(url,function(response){
    response.setEncoding('utf-8');
    response.on('data',function(data){
        console.log(data);
    });
    response.on('error',function(err){
        console.log("error occurred" + err);
    });
});
