const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/registrationary")
.then((value)=>{
      console.log("Connection Established...!")
}).catch((e)=>{
      console.log("Connection Error")
})

