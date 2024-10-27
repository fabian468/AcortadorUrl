import express from "express";
const router = express.Router();
import { redirect } from '../controller/redirect.js';


router.get('/:code', redirect);

export default router;
