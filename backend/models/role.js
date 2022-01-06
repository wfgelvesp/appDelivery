//import db from '../db/db.js'
const db = require ('../db/db.js')

const list = async () =>{
    let res=await db.query('select * from roles');
   // console.log(res);
    return res.rows;
}

//export default list;
module.exports={list:list};