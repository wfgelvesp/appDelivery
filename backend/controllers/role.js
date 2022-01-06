//import role from '../models/role.js';
const role = require ('../models/role.js')


const listRoles = async (req,res)=>{
    const roles = await role.list();
    console.log(roles);
    return res.status(200).send({roles});

}

//export default listRoles;
module.exports={listRole:listRoles};