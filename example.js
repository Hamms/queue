var testqueue = require('queue')(function(data,next){
  console.log(data);
  setTimeout(next,100);
});

for(var i=0;i<10;++i){
  testqueue.push(i);
}

setTimeout(function(){
  for(var i=100; i<110;++i){
    testqueue.push(i);
  }
},100);

setTimeout(function(){
  for(var i=200; i<210;++i){
    testqueue.push(i);
  }
},10000);

