const service = require ('../controllers/service.js')
const Router = require ('express')

const router=Router();

router.get('/listService',service.listService);


module.exports=router;
