// write a file using one json obj and read the file which gives you the same json obj in console 
ps = require ("fs")
var er={"name":"janmesh","age":20}

ps.writeFileSync("js1.txt",JSON.stringify(er))
var data=ps.readFileSync("js1.txt",'utf-8')
// parse remove the "" of keys 
console.log(JSON.parse(data))