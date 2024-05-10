var http=require('http')
http.createServer(function(req,res)
{   res.writeHead(302,{'Location':'http://www.google.com'})
    
    res.end()
}).listen(5056)