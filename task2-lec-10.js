// create a http page and pass json obj on that webpage

h=require('http')
h.createServer(function(req,res){
    var a ={'name':'janmesh'}
    res.writeHead(200,{'content-text':'application/json'})
    res.write(JSON.stringify(a))
    res.end()
}).listen(8081) 