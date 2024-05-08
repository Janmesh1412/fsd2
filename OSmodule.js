//  os= operating system 

var OS=require('os')
console.log(OS.arch()) // x64
console.log(OS.hostname()) 
console.log(OS.platform()) // win-32 / win-64
console.log(OS.tmpdir()) 
console.log(OS.freemem())// in bits 
console.log(OS.type())