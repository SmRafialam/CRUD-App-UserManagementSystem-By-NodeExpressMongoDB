const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://SmRafi:SmRafi017@cluster0.jo9ddtp.mongodb.net/?retryWrites=true&w=majority');
var MONGO_URI = 'mongodb+srv://SmRafi:SmRafi017@cluster0.jo9ddtp.mongodb.net/?retryWrites=true&w=majority'


const connectDB = async()=>{
    try{
        //mongoDB connection string
        const con = await mongoose.connect(MONGO_URI,{
            useNewUrlParser : true,
            useUnifiedTopology : true,
            
        })
        console.log(`MongoDB connected: ${con.connection.host}`);

    }catch(err){
        console.log(err);
        process.exit(1);
    }
}
module.exports = connectDB