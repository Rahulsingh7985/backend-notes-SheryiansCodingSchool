const express = require('express')
const app = express()
const path = require('path')
const userModel =require('./models/user')
app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.render("index")
})
app.get('/read', async (req,res)=>{
    let allusers = await userModel.find();
    res.render("read",{users:allusers})
})
app.post('/create', async (req,res)=>{
    let {name,email,image}=req.body
   let userCreated= await userModel.create({
        image,
        name,          // index.ejs and user.js me dono ke name same esliya ham single word me likh sakte hai
        email,        // agar same na hote to hame ese traha likhna padtha | name:name |
        
    })
    res.redirect("/read")
});
app.get('/delete/:id', async (req,res)=>{
    let allusers = await userModel.findOneAndDelete({_id: req.params.id});
    res.redirect("/read")
})
app.get('/edit/:id', async (req,res)=>{
    let allusers = await userModel.findOne({_id: req.params.id});
    res.render("edit",{users:allusers})
})
app.post('/update/:userid', async (req,res)=>{
    let {name , email,image}=req.body;
    let allusers = await userModel.findOneAndUpdate({_id: req.params.userid},{name,email,image},{new:true});
    res.redirect("/read")
})

app.listen(3000)