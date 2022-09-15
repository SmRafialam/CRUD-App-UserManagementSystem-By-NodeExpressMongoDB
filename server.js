const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

//log requests
app.use(morgan('tiny'));

//parse request to body-parser
app.use(bodyParser.urlencoded({extended:true}));

//set view engine
app.set('view engine','ejs');
// app.set('views',path.resolve(__dirname,ejs))

//load assets
app.use(express.static('assets'));
app.use('/css',express.static(__dirname + 'assets/css'));
app.use('/js',express.static(__dirname + 'assets/js'));
app.use('/img',express.static(__dirname + 'assets/img'));

// app.get('/',function(req,res){
//     // res.send("CRUD Application");
//     res.render('index');
// });
// app.get('/add-user',function(req,res){
//     res.render('add_user');
// });
// app.get('/update-user',function(req,res){
//     res.render('update_user');
// });
app.use('/',require('./server/routes/router'))


app.listen(3030,function(){
    console.log("Server Run Successfully...")
})