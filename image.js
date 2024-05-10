h=require('http')
fs=require('fs')
h.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'image/jpg'})
    Image=fs.readFileSync('download.jpg')
    res.end(Image)
}).listen(5054)