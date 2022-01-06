const user = require ('../models/user.js')


const listUser = async (req,res)=>{
    const users = await user.list();
    console.log(users);
    return res.status(200).send({users});

}


module.exports={listUser:listUser};