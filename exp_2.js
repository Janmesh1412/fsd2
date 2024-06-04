var ex = require("express")
 var app=ex()
 app.get("/things/:name/:id",(req,res)=>{
    res.send('The  id you entered is '+req.params.name+req.params.id)
 })
 app.listen(6565)
