/**
 * Created by schandramouli on 6/11/15.
 */
var fs = require('fs');
fs.readFile(process.argv[2],function(err, buffer){
    if(err)
        throw Error;
    var s = buffer.toString();
    var arr = s.split('\n');
    console.log(arr.length-1);
});
//console.log("Is this first?");
