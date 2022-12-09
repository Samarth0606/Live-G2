let express =  require('express');
let app = express();
let path = require('path');

let comments = [
    {
        id:0,
        username:"Samarth",
        comment:"chitkara students are good x 1"
    },
    {
        id:1,
        username:"Tarang",
        comment:"chitkara students are good x 2"
    },
    {
        id:2,
        username:"Divyanshuuu",
        comment:"chitkara students are good x 3"
    }
]

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));

app.use(express.static(path.join(__dirname , 'public')));
app.use(express.urlencoded({extended:true})); //middleware for form parsing

app.get('/' , (req,res)=>{
    res.send("<h1>root connected</h1>")
})

// to display all the comments --> task 1
app.get('/comments' , (req,res)=>{
    res.render('index' , {comments});
})

// to display the form for adding a new comment
app.get('/comment/new' , (req,res)=>{
    res.render('new');
})

// to add a new comment after collecting the dataa
app.post('/comments' , (req,res)=>{
    // console.log(req.body);
    let { username , comment } = req.body;
    comments.push({username, comment, id:comments.length})
    // res.send("data sent successfully")
    res.redirect('/comments');
})

app.listen('3000' , ()=>{
    console.log("server connected to port 3000");
})