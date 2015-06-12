/**
 * Created by schandramouli on 6/11/15.
 */
// console.log('HELLO WORLD');
//console.log(process.argv);
var sum = 0;
for(var i=0;i<process.argv.length;i++){
    if(!isNaN(process.argv[i])){
        sum += Number(process.argv[i]);
    }
}console.log(sum);