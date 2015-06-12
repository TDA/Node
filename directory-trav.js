/**
 * Created by schandramouli on 6/11/15.
 */
var fs = require('fs');
var path = require('path');

function filter(dir, ext, callback){
    fs.readdir(dir,function(err, list){
        if(err)
            return callback(err);
        var new_list = [];
        list.forEach(function(file){
            if(path.extname(file) === '.'+ext)
                new_list.push(file)
        });
        // var new_new = list.reduce(function(data,data2){return data+data2;});
        // console.log(new_new);
        callback(null,new_list);
    });

}
module.exports = filter;
//console.log("Is this first?");