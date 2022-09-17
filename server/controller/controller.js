var Userdb = require('../model/model');

//create and save new user
exports.create = (req,res) =>{
    //validate request
    if(!req.body){
        res.send(400).send({message:"content can not be empty!"});
        return;
    }
    //new user
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status,
    })
    //save user in the database
    user
    .save(user)
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message||"some error occurred"
        });
    });
}

//retrive or return all users/retrive or return single user
exports.find = (req,res) =>{

}

//update a new identified user by userId
exports.update = (req,res) =>{

}

//delete a new identified user by userId
exports.delete = (req,res) =>{

}