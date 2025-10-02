const express = require('express')
const app = express()
const cookieparser = require('cookie-parser')  // with the help of this line we console.log(print) the cookie
app.use(cookieparser())
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//#COOKIE SET AND READ
// app.get('/' ,(req,res)=>{
//     res.cookie("name" ,"harsh")  //SET COOKIE
//     res.send("done")
//     console.log(req.cookies)  //READ COOKIE
// })

//#password encryption
// app.get('/', (req, res) => {
//     bcrypt.genSalt(10, function (err, salt) {
//         bcrypt.hash("polololoo", salt, function (err, hash) {
//             console.log(hash)
//         });
//     });
// })

//#password decryption
// app.get('/', (req, res) => {
//     bcrypt.compare("polololoo", "$2b$10$PNloNtBHIXoZEiu0c994.u/9Eh4gGUX7P5/HR.bv.GnYKVKZIymAS", function (err, result) {
//         console.log(result)
//         res.send("working")
//         // result == true
//     });
// })

app.get('/', (req, res) => {
    let token =jwt.sign({email:"harsh@gmail.com"},"secret")
    res.cookie("token",token);
    res.send("done")
})

app.get('/read', (req, res) => {
    // console.log(req.cookies.token);  // read token
    let data = jwt.verify(req.cookies.token, "secret") //decrypt data of token
    console.log(data)
})
app.listen(3000);