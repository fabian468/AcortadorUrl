import express from "express";
const router = express.Router();
import { cut, updateUrl } from '../controller/cutController.js';
import { getUrlsByUid } from '../controller/userController.js'
import { getUrlStats } from "../controller/viewStadist.js";


router.post('/cut', cut);

router.get('/urluser/:uid', getUrlsByUid);

router.put('/urluser/actualizar', updateUrl);

router.get('/urluser/dataurl/:_id', getUrlStats);


export default router;
