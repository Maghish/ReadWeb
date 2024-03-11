import express from "express";

const router = express.Router();

// Controllers
import {
  createNewUser,
  authenticateUser,
  editUserData,
  getCurrentUser,
} from "../controllers/userManage";

router.post("/getcurrentuser", getCurrentUser);
router.post("/createuser", createNewUser);
router.post("/authenticateuser", authenticateUser);
router.post("/edituserdata", editUserData);

export default router;
