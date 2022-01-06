const { Pool } = require("pg")
const dotenv = require("dotenv");
dotenv.config();
// Coloca aquí tus credenciales
const pool = new Pool({
    host: process.env.HOST,
    user: process.env.USER_DB,
    password: process.env.PASS_DB,
    database: process.env.NAME_DB,
    port: process.env.PORT_DB
});
module.exports= pool;