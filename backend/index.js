/**import express from "express";
import cors from "cors";
//import * as db from "./db/db.js";
const db = require ('./db/db.js');
import dotenv from "dotenv";
 */
const express = require('express')
const app = express();
const dotenv = require("dotenv")
const cors = require ('cors')

const db = require("./db/db.js");
const role = require('./routes/role.js');
const user = require('./routes/user.js');
const service = require('./routes/service.js');
const statusService = require('./routes/statusService.js')

app.use(express.json());
dotenv.config();


app.use(cors());
app.use('/api/role',role);
app.use('/api/user',user);
app.use('/api/service',service);
app.use('/api/statusService',statusService);

app.listen(process.env.PORT,()=>console.log("Backend server running on port:"+process.env.PORT));

//db.dbConnection();