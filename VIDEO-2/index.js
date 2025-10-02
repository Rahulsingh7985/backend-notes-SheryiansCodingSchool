/*# INTRODUCTION TO NODE JS:
js se backend nahi ban sakta
kyuki js ke paas wo functionalities nahi hai jinse backend banta hai
ryan dahl isne socha js se backend banna chahiye
google chrome ka v8 engine ka code open source hai and ryan dahl us code mein chhedkhaani kar raha hai
kuyki v8 engine bana hai c++ me
fir usne socha ki humein to js me code karna hai
hum js code likhe ge jo ki wrapper layer of js receive karegi and wo code v8 engine ke c++ module ke
sath server create karega
SO NODEJS IS A JS RUNTIME ENVERONMENT*/


//npm init ->PAKAGE.JSON -> LEKHA JHOKHA OF THE PROJECT

const fs = require('fs')

// fs.writeFile("hey.txt","hey hello kaise ho",function(err){
//     if(err) console.log("err")
//         else console.log("done")
// })

// fs.appendFile("hey.txt"," mai to accha hu",function(err){
//      if(err) console.log("err")
//         else console.log("done")
// })

// fs.rename("hey.txt","hello.txt",function(err){
//      if(err) console.log("err")
//         else console.log("done")
// })

// fs.copyFile("hello.txt","./copy.txt",function(err){
//      if(err) console.log("err")
//         else console.log("done");
// })

// fs.unlink("copy.txt" , function(err){
//      if(err) console.log("err")
//         else console.log("removed")
// })