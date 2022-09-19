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
    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:"User with id not found!"});
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({
                message: err.message||"some error occurred"
            });
        });
    }else{
        Userdb.find()
        .then(user=>{
            res.send(user);
        })
        .catch(err=>{
            res.status(500).send({
                message: err.message||"Error occurred while retriving user information"
            });
        });
    }

}

//update a new identified user by userId
exports.update = (req,res) =>{
    if(!req.body){
        return res
        .status(400)
        .send({message:"Data to update can not be empty!"});
    }
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id,req.body,{userFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(404).send({message:"Can not update user with ${id}. maybe user not found!"});
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message||"Error update information"
        });
    });
}

//delete a new identified user by userId
exports.delete = (req,res) =>{
    const id = req.params.id;
    Userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:"Can not delete user with ${id}. maybe id is wrong!"});
        }else{
            res.send({
                message: "user was deleted successfully"
            })
        }
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message||"Could not delete user with id="+id
        });
    });
}