const service = require ('../models/service.js')


const listService = async (req,res)=>{
    const services = await service.list();
    console.log(services);
    return res.status(200).send({services});

}


module.exports={listService:listService};