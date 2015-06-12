/**
 * Created by schandramouli on 6/11/15.
 */
var dt = require('./directory-trav');

dt(process.argv[2],process.argv[3],function(err,data){
    if(err) {
        console.log("Error bro");
        process.exit(1);
    }
    data.forEach(function(d){
        console.log(d);
    });

});