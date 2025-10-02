//SETTING UP PARSERS FOR FORM

//SETTING UP ejs FROM ejs PAGES
    //INSTALL ejs FROM npm

//SETTING UP PUBLIC STATIC FILE

//dynamic routing
     //dynamic routing:
          // sabse pahle browser par jaao  
          // url likhiye apna jo aapko chahiye and enter dabaiye  
          // ab us url route ko create kariye  
          //res bhejiye kuchh bhi  
          // ab usi url ko agar dynamic banana hai to realise karo konsa part dynamic hai aur  
          // us part ke aage route mein : laga do  

          
const express = require('express');
const app = express();
const path = require('path')

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine', 'ejs');

app.get("/",function(req,res){
    res.render("index.ejs")
});

app.get("/profile/:username",function(req,res){
    res.send(`welcome, ${req.params.username}`)
});

app.listen(3000,function(){
    console.log("#CODE IS RUNNING")
})


