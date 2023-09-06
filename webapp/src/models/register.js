const mongoose = require("mongoose");
const express = require("express");
const validator = require("validator");

const employeeSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    PhoneNumber:{
        type:Number,
        required:true
    },
    Mail:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required: true
    },
    ConfirmPassword:{
        type:String,
        required:true
    },

})

const Register = new mongoose.model("Register",employeeSchema);
module.exports= Register;
