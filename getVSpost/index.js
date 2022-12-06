let express = require('express');
let app = express();
let path = require('path');

app.set('view engine', 'ejs');
app.set('views' , path.join(__dirname , 'views'));

//data ko parse krne ke liye middleware use kia hai
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res)=>{
    res.render('index');
})

app.get('/user' , (req,res)=>{
    console.log(req.query);
    res.send("get data route was successfully hit");
})

app.post('/user' , (req,res)=>{
    console.log(req.body);
    res.send("post request successfully sent")
})

app.listen(3000,()=>{
    console.log("server connected at 3000 port")
})