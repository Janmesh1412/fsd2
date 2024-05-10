
// var http=require('http')
// http.createServer(function(req,res)
// {   res.writeHead(200,{'content-type':'text/html'})
//     res.write('\nHello')
//     res.write('\nHello')
//     res.write('<h1>Hello</h1>') 
//     res.end("\nheyyy")
// }).listen(8080)

//  request url 
var http=require('http')
http.createServer(function(req,res)
{   res.writeHead(200,{'content-type':'text/html'})
    res.write(req.url)
    res.end()
}).listen(8082)