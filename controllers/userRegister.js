const User = require('../model/User');
module.exports.userRegister =async function(req, res){
    const{personal_name ,email , username , contact , avtar } = req.body;

    console.log(req.body);

    if(!personal_name || !email || !username || !contact){
        console.log("All filed required");
        res.status(400).json("All filed required");
    }else{
        const userData = await User.create({
            personal_name ,email , username , contact  
        });
    
        res.json("Data added")
    }
    

    
}