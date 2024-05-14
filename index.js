//var {d1,d2}= require('./calc.js') //  multiple module export
// console.log(d(10,20))
// console.log(d2.s(10,20))
//  console.log(d1.m(10,20))
// console.log(d1(10,20))
// console.log(d2(10,20))
var{sub,mul,name}=require('./calc.js')
console.log(sub(10,20))
console.log(mul(10,20))
console.log(name)


