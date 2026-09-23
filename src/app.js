const express = require('express');

const app = express();

app.use('/test',function(req,res){
    res.send("this is test route");
})

app.use('/hello', ((req,res)=>{
    res.send("hello from this route ")
}))

app.listen(7777,function(){
    console.log("server is succesfully started")
})