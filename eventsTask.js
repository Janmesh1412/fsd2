// write a node js script to create two  listners for a common event 
// call the respective call backs  print number of e vents associated with 
// an emmiter remove one of the  listener print number of remaining listners .
var e = require ("events")
var ee= new e.EventEmitter()
var ll1=function l1(){console.log("event1")}
var ll2 =function l2(){console.log("event2")}
ee.addListener('conn',ll1)
ee.addListener("conn",ll2)
var count=ee.listenerCount("conn")
console.log(count)
ee.emit("conn")
ee.removeListener("conn",ll1)
var count1=ee.listenerCount("conn")
console.log(count1)
ee.emit("conn")


