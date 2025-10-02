//npm init -y
// npm install express
//npm install mongoose

const express = require('express')
const app = express()
const userModel = require('./usermodel')

app.get('/',function(req,res){
    res.send("hello bro")
})

//CREATE USER
app.get('/create',async function(req,res){
    let createuser = await userModel.create({
        name:"nishant",
        username:"nishant",
        gmail:"nishant@gmail.com"
    })
    res.send(createuser)
})

//UPDATE USER
app.get('/update', async function(req,res){
    let updateuser = await userModel.findOneAndUpdate({username:"rspatel"},{name:"Rahul singh patel"},{new:true})
    res.send(updateuser)
})
//READ ONE USER
// app.get('/read', async function(req,res){
//     let users= await userModel.find({username:"nishant"});   // we also used findOne- it give user in object form
//     res.send(users)
// })
//READ ALL USER
app.get('/read', async function(req,res){
    let users= await userModel.find();
    res.send(users)
})
//DELETE
app.get('/delete', async function(req,res){
    let users= await userModel.findOneAndDelete({username:"rspatel"});  
    res.send(users)
})
app.listen(3000)