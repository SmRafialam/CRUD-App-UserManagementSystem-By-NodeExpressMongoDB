const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('./server/database/connection'); 

dotenv.config({path:'config.env'});

const mode = process.env.NODE_ENV

const app = express();

//log requests
app.use(morgan('tiny'));

//mongoDB connection
connectDB();

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


app.listen(3333,function(){
    console.log("Server Run Successfully...")
})












//for mongodb atlas+compass
// var MongoCLient = require('mongodb').MongoClient;

// var URL = "mongodb+srv://SmRafi:SmRafi017@cluster0.jo9ddtp.mongodb.net/?retryWrites=true&w=majority";
// MongoCLient.connect(URL,function(error,MyMongoClient){
//     if(error){
//         console.log("Connection failed");
//     }else{
//         console.log("Connection success");
//         InsertData(MyMongoClient);

//     }
// });
// function InsertData(MyMongoClient){
//     var MyDatabase = MyMongoClient.db("crud");
//     var MyCollection = MyDatabase.collection("list"); 

//     var Mydata = {name:"Rafi",email:"smrafialam@gmail.com",gender:"male",status:"active"};

//     MyCollection.insertOne(Mydata,function(error){
//         if(error){
//             console.log("Data insert fail");
//         }else{
//             console.log("Data insert success");

//         }
//     });
// }