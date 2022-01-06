const db = require ('../db/db.js')

const list = async () =>{
    let res=await db.query('select * from statusServices');
   // console.log(res);
    return res.rows;
}

//export default list;
module.exports={list:list};