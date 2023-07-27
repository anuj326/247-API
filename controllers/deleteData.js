const User = require('../model/User');

module.exports.deleteData = async function(req, res){
    const{email} = req.body;

    const result = await User.deleteOne({email:email});
    console.log(result.deletedCount);
    if(result.deletedCount == 0){
        res.status(404).json("record not found")
    }else{
        res.status(200).json("Data Deleted")
        
    }
}