import {Router} from 'express'
import { sigin, signup } from '../controller/user'


const router = Router()

router.post("/user",signup);
router.post("/user",sigin)

export default router;