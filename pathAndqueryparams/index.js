let express = require('express');
let app = express();

app.get('/r/:subreddit' , (req,res)=>{

   let {subreddit} = req.params;
    res.send(`welcome to the ${subreddit} subreddit part`)
})

app.get('/search' , (req,res)=>{
    console.log(req.query);
    let {first , last} = req.query;
    res.send(`query of first is ${first} and last is ${last} found`);
})

app.listen(8002,()=>{
    console.log("server connected");
})