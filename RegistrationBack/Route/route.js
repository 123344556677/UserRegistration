import express from 'express';
import {regist,login}from '../controllers/controllers.js'
const router=express.Router();
router.post('/reg',regist);
router.post('/log',login);
export default router;