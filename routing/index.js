let express = require('express');
let app = express();


app.get('/' , (req,res)=>{
    res.send("<h1> this is my root route </h1>")
})

app.get('/dog' , (req,res)=>{
    res.send("<h1> woof woof </h1>")
})

app.get('/cat' , (req,res)=>{
    res.send("<h1> meooww meoow </h1>")
})

app.get('/samarth' , (req,res)=>{
    res.send("<h1> hello samarth </h1>")
})

app.get('*',(req,res)=>{
    res.send("please enter a valid route")
})


app.listen(8000,()=>{
    console.log("server connected");
})