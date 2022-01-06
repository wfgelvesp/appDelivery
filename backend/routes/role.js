//import role from '../controllers/role.js';
const role = require ('../controllers/role.js')
//import { Router } from 'express';
const Router = require ('express')

const router=Router();

router.get('/listRole',role.listRole);

//export default router;
module.exports=router;
