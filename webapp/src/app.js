const express = require("express")
const path = require("path")
const app = express();
const hbs = require("hbs")
require("dotenv").config();
const Register = require("../src/models/register")
// const login = require("../models/login")
// require("../src/db/conn");
require("./db/conn");
// const cookieparser = require("cookie-parser");

const port = process.env.PORT || 4000

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('views', path.join(__dirname,"../views"))

//*********public static path**********//
const static_path = path.join(__dirname,"../public")
const templates_path =path.join(__dirname,"../templates/views") 
const partial_path =path.join(__dirname,"../templates/partials") 

app.set("view engine" , "hbs")
app.set("views", templates_path)
app.use(express.static(static_path))
hbs.registerPartials(partial_path)
// app.set('view engine','ejs')
app.use(express.static('public'))


//**********Routing**********//
app.get("/", (req, res)=>{
     res.render("index")
})
app.get("/about", (req, res)=>{
     res.render("about")
})
app.get("/weather", (req, res)=>{
     res.render("weather")
})
// app.get("/login", (req, res)=>{
//      res.render("login")
// })
app.get("/register", (req, res)=>{
     res.render("register")
})
//Register User
app.post("/",async (req,res) => {
     try{
        const password = req.body.Password;
        const cpassword = req.body.ConfirmPassword;
        
        if(password == cpassword){
          const registerEmployee = new Register({
          username:req.body.username,
          PhoneNumber:req.body.PhoneNumber,
          Mail:req.body.Mail,
          Password:password,
          ConfirmPassword:cpassword
          })
         
  
          await registerEmployee.save();
  
          res.status(201).render("index");
          
        }else{
          res.send("Passwords don't match");
        }
      }
       catch(e){
                  res.status(400).send(e);
              }
          
          });

app.get("/news", (req, res)=>{
     res.render("news")
})
app.get("*", (req, res)=>{
     res.render("404", {
          errmsg : `Opps! page not found`
     })
})
//*************************|Running Port By Listen|*************************//
app.listen(port, ()=>{
  console.log(`listening to the PORT : ${port}`)
})