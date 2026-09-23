const express = require('express');

const app = express();

//for get http request 
app.get("/user", ((req,res)=>{
    res.send({
        "firstName":"kunal",
        "lastName":"shivam"
    })
}))

//for post http request
app.post("/user", (req,res)=>{
    res.send("the data is saved in db")
})

//for put http request
app.put("/user", (req,res)=>{
    res.end("the changes has been implemented")
})

//this will make all http request 
app.use("/",function(req,res){
    res.send("helo from main home route")
})



app.listen(7777,function(){
    console.log("server is succesfully started")
})