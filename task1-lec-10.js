// create http webpage on which home page display welcome to home page 
// student page display welcome to studetn page display
// and any other page display page not found 

h=require('http')
h.createServer(function(req,res){
    if(req.url=="/home"){
        res.writeHead(200,{'content-type':'text/html'})
        res.write("welcome to home page")
        res.end()}
    else if(req.url=="/student"){
        res.writeHead(200,{'content-type':'text/html'})
        res.write("welcome to student page")
        res.end()}
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write("<h1>PageNotFound<h1>")
        res.end()
    }

}).listen(5053)