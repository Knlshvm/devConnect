const express = require('express');
const {adminAuthCheck,userAuthCheck} = require('./middlewares/auth')

const app = express();

app.use("/admin" , adminAuthCheck)


app.get('/admin/getAllData' , (req,res)=>{
    res.send("working")
})

app.get("/user",userAuthCheck, (req,res)=>{
    res.send("here is your profile")
})

app.get("/user/login", (req,res)=>{
    res.send("lets go through login api")
})



app.listen('7777' , ()=>{
    console.log("server started at port 7777");
})