import express from "express";

const router = express.Router();

// Controllers
import {
  createNewUser,
  loginUser,
  editUserData,
  getCurrentUser,
  getUser,
} from "../controllers/userManage";

import protect from "../middleware/authenticateUser";

router.post("/getcurrentuser", protect, getCurrentUser);
router.post("/createuser", createNewUser);
router.post("/loginuser", loginUser);
router.post("/edituserdata", protect, editUserData);
router.post("/getuser", protect, getUser);

export default router;
