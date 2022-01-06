const user = require ('../controllers/user.js')
const Router = require ('express')

const router=Router();

router.get('/listUser',user.listUser);


module.exports=router;