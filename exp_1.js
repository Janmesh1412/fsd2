var exp = require('express')
var app= exp()

app.get('/',(req,res)=>{  
    res.set("content-type","text/html")
    res.write("<h1>Hello</h1>")
    res.send()
})

app.get('/about',(req,res)=>{  
    res.send("HIIIIIIIIIII")
})

app.listen(5455)