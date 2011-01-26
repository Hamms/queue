exports = module.exports = function(callback){
  var that = {};
  var queue = [];

  var push = function(obj){
    queue.push(obj)
    if(queue.length === 1){
      next()
    }
  };
  that.push = push;

  var next = function(){
    process.nextTick(function(){
      if(queue.length){
        callback(queue[0],function(){
          queue.shift();
          next();
        })
      }
    });
  };

  return that;
}
