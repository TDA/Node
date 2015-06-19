/**
 * Created by schandramouli on 6/13/15.
 */
var http = require('http');
var url = process.argv[2];
http.get(url,function(response){
    response.setEncoding('utf-8');
    var str = '';
    response.on('data',function(data){
        str+=data;
    });
    response.on('error',function(err){
        console.log("error occurred" + err);
    });
    response.on('end',function(){
        console.log(str.length);
        console.log(str);
    })
});
