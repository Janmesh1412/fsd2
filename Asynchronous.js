// syntax writeFile(filename,data,cb) cbb= call back  
// data = ReadFile(filename,utf-8,cb)
// appendFile(filename,data,cb)


var Fs=require("fs")
//Fs.writeFile("abc.txt","hello", function(err){  if(err){console.log(err)}    else{console.log("written Completed")} })
 
//Fs.readFile("abc.txt","utf-8",function(err,data){   if(err){console.log(err)} else{console.log(data)}   }) 

// Fs.appendFile("abc.txt","hello hiii heyy ", function(err){  if(err){console.log(err)}    else{console.log("written Completed")} })

// using  fat arrow function 
// write ==> append ==> read
Fs.writeFile("pqr.txt","Today is good day.\n",()=>{Fs.appendFile("pqr.txt",'is it ? ',()=>{Fs.readFile("pqr.txt","utf-8",function(err,data){   if(err){console.log(err)} else{console.log(data)}   }) 
})})



