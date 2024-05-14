// write a node  js program which fetch fiel name from requested url 
// and print that file data on that server 

var http=require('http')
var url = require('url')
var rs=require('fs')
http.createServer(function(req,res)
{   res.writeHead(200,{'content-type':'text/html'})
    var a =url.parse(req.url,true).query
    var data=rs.readFileSync(a.filename,'utf-8')
    res.end(data)
}).listen(8080)
