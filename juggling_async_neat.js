/**
 * Created by schandramouli on 6/19/15.
 */
var http = require('http');
var urls = [process.argv[2], process.argv[3], process.argv[4]];
var bl = require('bl');
var results = [];
var strings = [];
var count = 0;

function getHTTP(i) {
  http.get(urls[i], function (res) {
    var str = '';
    res.on('data', function (data) {
      str += data;
    });
    res.on('error', function (err) {
      console.log("error occurred" + err);
    });
    res.on('end', function () {
      ///console.log(str);
      strings[i] = str; // the closure puts this in order , 0,1,2 --> lexical scoping
      console.log("i actually am this " + i); // --> lexical scoping ensures that this is always the number in order
      //console.log(strings[i]);
      count++;
      if(count == 3){
        for(var j = 0; j < strings.length; j++){
          console.log(strings[j]);
        }
        console.log("i actually triggered this " + i); // same reason as above, will always print the last number due to closure
        count = 0;
      }
    });
  });


}
for(var i = 0; i < urls.length; i++) {
  getHTTP(i);
}
  getHTTP(0);
  getHTTP(2);
  getHTTP(1);


//}

//console.log(strings);

/*
function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      results[index] = data.toString()
      count++

      if (count == 3)
        printResults()
    }))
  })
}

for (var i = 0; i < 3; i++)
  httpGet(i)
*/