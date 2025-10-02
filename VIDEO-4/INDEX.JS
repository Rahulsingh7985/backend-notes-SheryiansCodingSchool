// EXPRESS.JS FRAMEWORK
//INTRODUCTION OF EXPRESS.JS:
   //express js ek npm package ha
   //it is a framwork
   //manage everythingfrom receiving the request and giving the response

const express = require('express');
const app = express()
app.use(function(req, res, next){
    console.log("MIDDLEWARE CHALA")
    next();
})
app.get('/', (req, res, next) => {                  
    res.send('Hello World ')               //npx nodemon script.js ->WRITE IN TERMINAL FOR RUN SERVER &  
})                                           //IT IS AUTOMATIC RESTART SERVER DUE TO CHANGE

app.get('/user', (req, res, next) => {
  const error = new Error("User not found")
  next(error)  // यह errorHandler को भेज देगा
})

//ERROR HANDLER
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3000)

//MIDDLEWARE ->JAB BHI SERVER REQUEST ACCEPT KARTA HAI WHA SE ROUTE KE PEECH PAHUCHNE TAK AAGAR AAP US REQUEST KO BEECH ME ROKTE HO AND KUCH PERFORM KARTE HAI, TO ELEMENT MIDDLEWARE KHALTA HAI