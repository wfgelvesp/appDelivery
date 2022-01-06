const statusService = require ('../controllers/statusService.js')
const Router = require ('express')

const router=Router();

router.get('/listStatusService',statusService.listStatusService);


module.exports=router;