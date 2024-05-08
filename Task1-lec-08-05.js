// write a node js to take 5 single digit elements seperated by white space in .txt file print sorted array of tghis five elements in terms of integer on Node js server 

var Fs = require ('fs')

Fs.writeFileSync("t1.txt",'0 2 1 4 8')
var arr = Fs.readFileSync("t1.txt").toString().split(" ")
arr.sort()
for( i in arr){
    arr[i]=parseInt(arr[i])
}
console.log(arr)