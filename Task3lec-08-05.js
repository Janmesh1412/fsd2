// write node js script to create file named temp.txt check if physical memory is greter than 1 gb then print msg sufficient memory in the file 
// else print msg low memory in the file

var ps = require('os')
var s = require('fs')


m=ps.freemem()
m=m/1024/1024/1024

if (m>1)
    {
        s.writeFileSync("temp.txt",'sufficient memory')
        console.log('sufficient memory')
    }
else{
    s.writeFileSync("temp.txt",'low memory')
    console.log('low memory')   
}