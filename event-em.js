var em = require('events').EventEmitter;
var util = require('util');

//em.emit('hi');

var Ticker = function () {
    var self = this;
    setInterval(function(){
        // this is an emitter
        self.emit('tick');
    },1000);
    setTimeout(function() {
            setInterval(function () {
                // this is an emitter
                self.emit('tock');
            }, 1000);
        },500);

}

util.inherits(Ticker,em);

var ticker = new Ticker();

// Listeners are bound here
ticker.on('tick',function(){
    console.log('tick here');
});

ticker.on('tock',function(){
    console.log('tock here');
});


