// write a node js script to perform tak as ask
// 1. create one page with two links home and about 
//2. both the pages must contain html type contain and add require contain on both pages
// 3. if user had any other url then there should be msg page not found

h=require('http')
h.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<a href="/">home</a>')
    res.write('<a href="/about">about</a>')
    if(req.url=="/"){
        
        res.write("welcome to home page")
        res.end()}
    else if(req.url=="/about"){
       
        res.write("welcome to about page")
        res.end()}
    else{
        
        res.write("<h1>PageNotFound<h1>")
        res.end()
    }
    res.end()
}).listen(8084)