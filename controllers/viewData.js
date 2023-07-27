const User = require('../model/User');
module.exports.viewData = async function(req, res){
    const{email} = req.body;
    console.log(email);
    const data = await User.findOne({email:email})
    if(data){
        res.json(data);
    }else{
        res.status(404).json('Data not found');
    }
}