// write node js to write the text this data to new.txt file after that append the text this data 
// to the same new.txt file after that read file data on console after finnishing read operation 
// print thaks read and write operation are asynchronous and sequence should be minimize 

var Fs=require('fs')
var e=require("events")
var  ee= new e.EventEmitter()
ee.on("write",()=>{Fs.writeFile("new.txt","This is Data",()=>{console.log("Sucessfully written")
                                                                    ee.emit("append")
})})

ee.on("append",()=>{Fs.appendFile("new.txt","\nThis is Data",()=>{console.log("Sucessfully append")
                                                                    ee.emit("read")
})})

ee.on("read",()=>{Fs.readFile("new.txt","utf-8",(err,data)=>{console.log(data)
                                            ee.emit("finish")
})})

ee.on("finish",()=>{console.log("Thank you")})

ee.emit("write")