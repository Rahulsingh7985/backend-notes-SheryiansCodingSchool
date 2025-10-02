const express = require('express')
const app = express()

const path = require('path')
const cookieParser = require('cookie-parser')
const userModel = require('./models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))
app.use(cookieParser())

app.get('/', function (req, res) {
    res.render("index")
})
app.post('/create',  function (req, res) {
    let { username, email, password, age } = req.body;
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let createUser = await userModel.create({
                username,
                email,
                password:hash,
                age
            })
            let token = jwt.sign({email},"secretecode");  //set cookie
            res.cookie("token",token)
            res.send(createUser)
        })
    })

})

app.get("/logout",function(req,res){   //log-out user
    res.cookie("token","")
    res.redirect('/')
})

app.get("/login",function(req,res){
    res.render("login")
})

app.post("/login", async function(req,res){
    let user = await userModel.findOne({email:req.body.email})
    let token = jwt.sign({email:user.email},"secretecode");  //set cookie
    res.cookie("token",token)
    if(!user) res.send("something is wrong")

    bcrypt.compare(req.body.password,user.password,function(err,result){
        if(result) res.send("you can login")
        else res.send("you can not login")
    })
})

app.listen(3000); 