const statusService = require ('../models/statusService.js')


const listStatusService = async (req,res)=>{
    const statusServices = await statusService.list();
    console.log(statusServices);
    return res.status(200).send({statusServices});

}


module.exports={listStatusService:listStatusService};