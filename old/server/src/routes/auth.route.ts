import express from "express";

const router = express.Router();

// Controllers
import {
  createNewUser,
  loginUser,
  editUserData,
  getCurrentUser,
  getUser,
} from "../controllers/user.controller";

import protect from "../middleware/auth.middleware";

router.get("/getcurrentuser", protect, getCurrentUser);
router.post("/createuser", createNewUser);
router.post("/loginuser", loginUser);
router.post("/edituserdata", protect, editUserData);
router.post("/getuser", protect, getUser);

export default router;
