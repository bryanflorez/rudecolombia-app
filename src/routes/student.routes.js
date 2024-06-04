import {Router} from 'express';
import { authRequired } from '../middlewares/validatetoken.js';
import { getStudents, createStudents } from "../controllers/student.controllers.js";


const router = Router()

router.get('/student', authRequired, getStudents);
router.post('/student', authRequired, createStudents);

export default router;