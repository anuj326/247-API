const User = require('../model/User');

module.exports.updateData = async function(req, res){
    const {personal_name ,email , username , contact } = req.body;
    //console.log(email);
    var useremail = email;
    const result = await User.updateOne({email:useremail},{personal_name , username , contact})
    
    if(result.modifiedCount == 0){
        res.status(400).json("Record Not found")
        
    }else{
        res.status(200).json("Record Updated");
    }
}