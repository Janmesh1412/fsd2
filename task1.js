// write express script to print msg in  next line splitting by full stop and use get method   to submit the data html file  conatins form of text area for message and submit button 
var express=require("express")
var app=express()
var path=require('path')
const staticpath = path.join ("./public")
app.use(express.static(staticpath,{"index":"formm.html"}))
app.get("/login",(req,res)=>{
    const response=req.query.comment
    const response1=response.split('.')
    res.send(response1)
})
// console.log(response1)
app.listen(3710)
console.log(staticpath)