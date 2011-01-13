exports = module.exports = function(callback){
  var that = {};
  var emitter = require('events').EventEmitter;
  var queue = [];

  var push = function(obj){
    if(queue.length === 0){
      callback(obj);
    } else {
      queue.push(obj)
    }
  };
  that.push = push;

  var next = function(){
    process.nextTick(function(){
      emitter.emit('next');
    });
  };
  that.next = next;

  emitter.on('next',function(){
    process.nextTick(function(){
      if(queue.length){
        callback(queue.pop())
      }
    });
  });

  return that;
}
