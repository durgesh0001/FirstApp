
var emitter=require('./testemitter');
var emt=new Emitter();
var array=[];

emt.on('greet',function () {
    console.log("some thing happend")
});
emt.on('greet',function () {
    console.log("some thing occure");
});
console.log("hello");

array.push(function () {
    console.log("hello world");
})
array.push(function () {
    console.log("hello world");
})
array.forEach(function (item) {
item();
})