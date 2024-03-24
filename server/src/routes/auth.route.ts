import { Router } from "express";
import { signupUser, loginUser, getUser, getCurrentUser, editUser } from "../controllers/auth.controller";

import protect from "../middleware/auth.middleware";

const router = Router();

router.post('/signup', signupUser);
router.post('/login', loginUser);
router.get('/getuser', protect, getUser);
router.get('/getcurrentuser', protect, getCurrentUser);
router.post('/edituser', protect, editUser);

export default router