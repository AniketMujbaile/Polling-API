const express=require('express')
const Router=express.Router()

// this is the entry point of all the api named url's
console.log("i m in")
Router.use('/api',require('./api/index'));

//importing homecontroller
const homeController = require("../controller/HomeController");
//adding a route for getting the homepage of api
Router.get('/',homeController.homePage);

module.exports=Router