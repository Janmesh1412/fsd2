url = require("url")
addr = "http://localhost:8085/default.html?Name=Prof.Khushbu_Patel&initial=PKP"
var q = url.parse(addr,true)
x=JSON.stringify(q.query)
console.log(x)
console.log(q.host)
console.log(q.pathname)
console.log(q.query)


// wap to find whether a year is leap or not from static url.
url = require("url")
addr = "http://localhost:3180/default.html?year=2024&month=Feb"
var leap = url.parse(addr,true)
if(leap.query.year%4==0){
    console.log("leap year")
}
else{
    console.log("not a leap year")
}




