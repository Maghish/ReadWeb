import { Router } from "express";
import { signupUser, loginUser, getUser, getCurrentUser } from "../controllers/auth.controller";

import protect from "../middleware/auth.middleware";

const router = Router();

router.post('/signup', signupUser);
router.post('/login', loginUser);
router.get('/getuser', protect, getUser);
router.get('/getcurrentuser', protect, getCurrentUser);
// POST edituser
// DELETE signout

export default router