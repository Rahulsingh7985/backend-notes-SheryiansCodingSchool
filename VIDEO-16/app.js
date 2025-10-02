const express = require('express')
const app = express()

const userModel = require("./models/user")
const postModel = require("./models/post")

app.get('/',(req,res)=>{
    res.send('hey')
})

app.get('/create', async (req,res)=>{
    let user = await userModel.create({
        username : "Rahul",
        email : "rahul@2003",
        age:22

    })
    res.send(user)
})

app.get("/post/create" ,async function(req,res){
    let post = await postModel.create({
        postdata:"kase ho sab log post crate ho chuki hai",
        id:"6887b2aaa20b9a220634c005"
    })
    let user = await userModel.findOne({_id:"6887b2aaa20b9a220634c005"})
    user.posts.push(post._id)
    await user.save()
    res.send({user,post})
})

app.listen(3000)