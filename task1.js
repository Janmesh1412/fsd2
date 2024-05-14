var http=require('http')
var url = require('url')
http.createServer(function(req,res)
{   res.writeHead(200,{'content-type':'text/html'})
    var a =url.parse(req.url,true).query
    test=a.year+" "+a.month
    res.end(test)
}).listen(3180)
