var express=require("express")
var app=express()
var path=require('path')
const staticpath = path.join ("./public")
//app.use(express.static(staticpath)) // {'index':"index2.html"} for other naming file 
app.use(express.static(staticpath,{"index":"formm.html"}))
app.get("/login",(req,res)=>{const response={fname:req.query.username, pass:req.query.password}
res.send(response)})
app.listen(5251)
console.log(staticpath)