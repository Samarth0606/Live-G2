let express =  require('express');
let app =  express();
let path = require('path');


let Todos = ["go to gym", "go to new year pallltyy", "go to take a bath"]

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname, 'views'));
app.use('/cat' , express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true})); //middleware for req.body



app.get('/',(req,res)=>{
    res.send("CSR vs SSR")
})

app.get('/todos' , (req,res)=>{
    if(req.xhr){
        console.log("ajax request");
        res.json(Todos);
    }
    else{
        console.log("normal method");
        res.render('todos' , {Todos});
    }


})
app.post('/todos' , (req,res)=>{
    // console.log(req.body);
    let {todo} = req.body;
    Todos.push(todo);
    // res.send("post req. successfully sent");
    res.status(200).json({msg:"todos added successfully"});
})

app.listen(3000,()=>{
    console.log("server connected at port 3000");
})