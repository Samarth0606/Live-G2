let express =  require('express');
let app = express();
let path = require('path');
const { v4: uuid } = require('uuid');
let methodOverride = require('method-override');
app.use(methodOverride('_method')); //middleware for method-override


let comments = [
    {
        id:uuid(),
        username:"Samarth",
        comment:"chitkara students are good x 1"
    },
    {
        id:uuid(),
        username:"Tarang",
        comment:"chitkara students are good x 2"
    },
    {
        id:uuid(),
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
    // comments.push({username, comment, id:comments.length})
    comments.push({username, comment, id:uuid()});
    // res.send("data sent successfully")
    res.redirect('/comments');
})

// show a particular comment
app.get('/comments/:commentId' , (req,res)=>{
    // console.log(req.params);
    let {commentId} = req.params;
    // console.log(foundComment);
    // let foundComment = comments.find((comment)=>{ return comment.id === parseInt(commentId)});
    let foundComment = comments.find((comment)=>{ return comment.id === (commentId)});
    // console.log(foundComment);
    res.render('show' , {foundComment} )
    // res.render('show' , {comment: foundComment} )
    // res.send("params found");
})


// to show the form of editing the comment
app.get('/comments/:commentId/edit' , (req,res)=>{
    let {commentId} = req.params;
    let foundComment = comments.find((comment)=>{ return comment.id === (commentId)});
    res.render('edit', {foundComment});
})

// to hit the patch route and save the edited comment
app.patch('/comments/:commentId' , (req,res)=>{
    let {commentId} = req.params;
    let foundComment = comments.find((comment)=>{ return comment.id === (commentId)});
    // console.log(foundComment);
    // console.log(req.body);
    let {comment} = req.body;
    foundComment.comment = comment;
    res.redirect('/comments');
    // res.send("patch req. sent successfuly");
})


// to delete a comment
app.delete('/comments/:commentId' , (req,res)=>{
    let {commentId} = req.params;
    let newCommentArray = comments.filter((comment)=>{ return comment.id !== (commentId)});
    comments = newCommentArray;
    res.redirect('/comments');
})



app.listen('3000' , ()=>{
    console.log("server connected to port 3000");
})