const express = require('express');
const route = express.Router();

const services = require('../services/render');

route.get('/',services.homeRoutes);
route.get('/add-user',services.add_user);
route.get('/update-user',services.update_user);

// route.get('/',function(req,res){
//     res.send("CRUD Application");
//     res.render('index');
// });
// route.get('/add-user',function(req,res){
//     res.render('add_user');
// });
// route.get('/update-user',function(req,res){
//     res.render('update_user');
// });

module.exports = route;

