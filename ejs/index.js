let express = require('express');
let app = express();
let path = require('path');

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'))

let todoos = ['go to gym' , 'study java' , 'study web' , 'have breakfast'];

app.get('/r' , (req,res)=>{
    res.render('index')
})

app.get('/random' , (req,res)=>{
    let randomNum = Math.floor(Math.random()*100);
    res.render('random' , {randomNum})
})

app.get('/todo' , (req,res)=>{
    
    res.render('todos' , {todoos})
})


app.listen(8002 , ()=>{
    console.log("server connected successfully")
})