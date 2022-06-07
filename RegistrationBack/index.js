import express from 'express';
import cors from 'cors';
import router from './Route/route.js';
import connection from './Database/db.js'
import bodyParser from 'body-parser';
const app=express();
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());
app.listen(5000,()=>console.log("server is running"));
app.use('/',router);
connection();
